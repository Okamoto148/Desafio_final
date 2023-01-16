import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


export default function CheckboxListSecondary({lista, imagem, handleUser}) {


  return (
    <>
    <List dense sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid lightgray' }}>
      <div style={{width: '100%', backgroundColor: 'black', color: 'white', fontWeight: 'bold', marginTop: '-10px',  height: '40px', display: 'flex', alignItems: 'center'}}><div style={{marginLeft:'20px'}}>CADASTRO</div></div>
      {lista.map((value, index) => {
        return (
          <ListItem 
            key={index}
            secondaryAction={
              <RemoveRedEyeOutlinedIcon
                edge="end"
                onClick={()=>handleUser(index)}
                index={index}
              />

            }
            disablePadding
          >
            <ListItemButton onClick={()=>handleUser(index)} index={index}>
              <ListItemAvatar>
                <Avatar
                  alt={``}
                  src={value.imagem}
                />
              </ListItemAvatar>
              <ListItemText primary={value.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
      
    </List>
   
      </>
  );
}