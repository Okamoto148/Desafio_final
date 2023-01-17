import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FormDialog from './FormDialog';

 

export default function CheckboxListSecondary({lista, imagem, handleUser,label='Novo Cadastro', handleCpfChange, CPF, handleTelChange, tel, onChangeName, name, onChangeEmail, email, onChangeAdress, adress, options, onChange, genre, handleRegister, open, handleClickOpen, handleClose}) {


  return (
    <>
    <List dense sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid lightgray' }}>
      <div style={{width: '100%', backgroundColor: 'black', color: 'white', fontWeight: 'bold', marginTop: '-10px',  height: '40px', display: 'flex', alignItems: 'center'}}><div style={{marginLeft:'20px'}}>CADASTRO</div></div>
      {lista.map((value, index) => {
        return (value.name&&<div>
          <ListItem 
            key={index}
          
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
        </div>);
      })}

      
<FormDialog
         handleCpfChange={handleCpfChange} 
          CPF={CPF} 
          handleTelChange={handleTelChange}
          tel={tel}
          onChangeName={onChangeName}
          name={name}
          onChangeEmail={onChangeEmail}
          email={email}
          onChangeAdress={onChangeAdress}
          adress={adress}
          options={options}
          onChange={onChange}
          genre={genre}
          handleRegister={handleRegister}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
    </List>
   
      </>
  );
}