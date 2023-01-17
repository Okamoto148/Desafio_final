import Header from './api/Components/Header';
import Lista from './api/Components/Lista';
import { useState, useEffect } from 'react';
import FormDialog from './api/Components/FormDialog';
import DialogUser from './api/Components/DialogUser';
import axios from 'axios';


export default function Cadastro() {
  const [lista, setLista] = useState([{}]);
  const [CPF, setCPF] = useState('');
  const [tel, setTel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const options = ['masculino', 'feminino'];
  const [genre, setGenre] = useState('');
  const [open, setOpen] = useState(false);
  const [nextId, setNextId] = useState(1);
  const [userOpen, setUserOpen] = useState(false);
  const [userIndex, setUserIndex] = useState('');

  useEffect(() => {

    axios
      .get("/get")
      .then((res) => {
        const newList = res.data;
        setLista(newList ? newList : [{}])
        console.log(`Este é o ${res.data}`)

      })
      .catch((error) => {
        console.log(error);
      });


  }, [])






  function handleCpfChange(event) {
    const notFormattedCpf = event.target.value
    const formattedCpf = notFormattedCpf.replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
    setCPF(formattedCpf)
  }

  function handleTelChange(event) {
    const notFormattedTel = event.target.value
    const formattedTel = notFormattedTel.replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')

    setTel(formattedTel)
  }

  function handleRegister() {
  if(!name||!email||!tel||!adress||!genre||!CPF){
    alert('Favor colocar todos os dados!')
  }else{
    
    if (userIndex) {
      const newList = lista[userIndex];
      newList.name = name;
      newList.email = email;
      newList.tel = tel;
      newList.adress = adress;
      newList.CPF = CPF;
      newList.genre = genre;
      setOpen(false);
      setUserIndex('');
      setName('');
      setEmail('');
      setTel('');
      setAdress('');
      setGenre('');
      setCPF('');
      axios
        .post("./update", {
          lista: lista,
        });


    } else {

      const newList = [...lista, { name: name, email: email, tel: tel, adress: adress, CPF: CPF, id: nextId, imagem: genre === 'masculino' ? `https://randomuser.me/api/portraits/men/${nextId}.jpg` : `https://randomuser.me/api/portraits/women/${nextId}.jpg` }];
      setNextId(nextId + 1);
      setLista(newList);
      setOpen(false);
      setName('');
      setEmail('');
      setTel('');
      setAdress('');
      setGenre('');
      setCPF('');





      if (newList.length <= 2) {

        axios
          .post("./create", {
            lista: newList,
          });



      } else {
        axios
          .post("./update", {
            lista: newList,
          });


      }
      }

    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userHandleClose = () => {
    setUserOpen(false);
  };


  const handleUser = index => {
    setName(lista[index].name);
    setEmail(lista[index].email);
    setTel(lista[index].tel);
    setAdress(lista[index].adress);
    setCPF(lista[index].CPF);
    setUserOpen(true);
    setUserIndex(index);
  };

  function edit() {

    const newList = lista[userIndex];
    setName(newList.name);
    setEmail(newList.email);
    setTel(newList.tel);
    setAdress(newList.adress);
    setGenre(newList.genre);
    setCPF(newList.CPF);
    setGenre(newList.genre);
    setUserOpen(false);
    setOpen(true);

  }

  function apagar() {
    const newList = [...lista];
    newList.splice(userIndex, 1);
    setLista(newList);
    setUserOpen(false);
  }







  return (
    <section>
      <Header />
      <div style={{ width: '50%', margin: 'auto' }}>
        <Lista
          lista={lista}
          imagem=''
          handleUser={handleUser}
          CPF={CPF}
          handleTelChange={handleTelChange}
          tel={tel}
          onChangeName={e => setName(e)}
          name={name}
          onChangeEmail={e => setEmail(e)}
          email={email}
          onChangeAdress={e => setAdress(e)}
          adress={adress}
          options={options}
          onChange={e => setGenre(e)}
          handleRegister={handleRegister}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}

        />


      </div>

      <DialogUser
        userHandleClose={userHandleClose}
        userOpen={userOpen}
        userName={name}
        userEmail={email}
        userPhone={tel}
        userCPF={CPF}
        userAdress={adress}
        userEdit={edit}
        userDel={apagar}
      />
      
    </section>
  )
}