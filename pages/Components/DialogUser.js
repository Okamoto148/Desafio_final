import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ListaCadastro from './ListaCadastro';

export default function AlertDialog({userOpen, userHandleClose, userName, userEmail, userPhone, userAdress, userCPF, edit, apagar}) {



  return (
    <div>

      <Dialog
        open={userOpen}
        onClose={userHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{width: '500px'}}>
          <DialogContentText id="alert-dialog-description">
           <ListaCadastro 
             userName={userName}
             userEmail={userEmail}
             userPhone={userPhone}
             userAdress={userAdress}
             userCPF={userCPF}
             userPhone={userPhone}
             edit={edit}
             apagar={apagar}
             
             />
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={userHandleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}