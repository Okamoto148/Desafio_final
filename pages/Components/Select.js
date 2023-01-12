import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

export default function select({onNumero, label='label', value, options=[0,1]}){

  function handleChange(e){
  onNumero(e.target.value)
}
  
  return(
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{label}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label={label}
    onChange={handleChange}
  >
    {options.map((item, index)=><MenuItem key={index} value={item}>{item}</MenuItem>)}
  </Select>
</FormControl>

  )
}