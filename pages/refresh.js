import Header from './api/Components/Header';
import Button from '@mui/material/Button';

export default function Refresh(){
  return(
    <>
    <Header />
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}} >
          <Button variant="outlined" textAlign='center' width='150px' onClick={() => window.location.reload(false)}>Refresh</Button>
        </div>
    <div style={{border: '0', overflow: 'visible'}}>
<object type="text/html" style={{width: '100%', height: '500px'}} data="https://random.dog/"></object>
</div>
    </>
  )
}