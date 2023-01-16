import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from './Select';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export default function FormDialog({label='Novo Cadastro', handleCpfChange, CPF, tel, handleTelChange, onChangeName, name, onChangeEmail, email, onChangeAdress, adress, title='Novo Cadastro', handleRegister, onChange, options, value, open, handleClickOpen, handleClose}) {
 

  function handleNameChange(event){
    onChangeName(event.currentTarget.value);
  };

    function handleEmailChange(event){
    onChangeEmail(event.currentTarget.value);
  };

    function handleAdressChange(event){
        onChangeAdress(event.currentTarget.value);
      };


  

  return (
    <div>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleClickOpen}/>
      </Fab>


      <Dialog open={open} >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleNameChange}
            value={name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleEmailChange}
            value={email}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Telefone"
            type="text"
            fullWidth
            variant="standard"
            value={tel}
            onChange={handleTelChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Endereço"
            type="text"
            fullWidth
            variant="standard"
            value={adress}
            onChange={handleAdressChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="CPF"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleCpfChange}
            value={CPF}
          />

          <Select
            variant='standard'
            options={options}
            onChange={onChange}
            value={value}
            label='Gênero'
            />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Voltar</Button>
          <Button onClick={handleRegister}>Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}