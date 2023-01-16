import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  useEffect(()=>{
    const novo = localStorage.getItem('token');
    const novoToken=Cookies.get('token');

    if(!novoToken){
      Cookies.set('token', novo);
    };
    
    const novoRemember=localStorage.getItem('remember');

    
    if(novoRemember){
      setRemember(novoRemember);
      if(novoToken){
        setToken(novoToken);
        
        axios
        .post("./login",{
           token: novoToken,
          remember: novoRemember
        });
      };
    };

    if(novoRemember && (novoToken&&novoToken!=='Login inválido!')){
      document.location.pathname = '/profile';
    }
    
  },[])

  const [token, setToken]=useState('');
  const [remember,setRemember]=useState(false);
  console.log(remember)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

      axios
        .post("./login",{
           user: data.get('userName'),
           pass: data.get('password')
})
     .then((response) => {
       if(response.data==='Login inválido!'){
         alert(response.data);
         
       }else{
         setToken(response.data);


    document.location.pathname = '/profile';
       }
       Cookies.set('token',response.data);
      localStorage.setItem('token', response.data);
       }
          )
     .catch((err) => {
       console.error("ops! ocorreu um erro" + err);
     })
  };



      function togleRemember(event){
        const novoRemember = remember?false:true;
        setRemember(novoRemember);
        localStorage.setItem('remember', novoRemember);

      }
      
    
  

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value={remember} color="primary" onChange={togleRemember} checked={remember}/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
