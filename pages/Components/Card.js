import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from 'react';
import Select from './Select'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const statusCode = [100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418 ,420, 421, 422, 423, 424, 425, 426, 429 ,431, 444, 450, 451, 497, 498, 499, 500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599];

  const [selectStatus,setSelectStatus]=useState(100);
  const imagemGato = `https://http.cat/${selectStatus}`;
  const data = new Date()


  return (
    <section style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Escolha o status code"
        subheader={data.toString()}
      />
      
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Select 
            label='Escolha o status code'
            options={statusCode}
            value={selectStatus}
            onNumero={e=>setSelectStatus(e)}
            />
        </Typography>
      </CardContent>
       <CardMedia
        component="img"
        image={imagemGato}
        alt=""
      />
    </Card>
    </section>
  );
}