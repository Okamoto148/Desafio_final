import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Pagination from './Components/Pagination';




export default function profile(){

  const [pessoas, setPessoas]=useState([{}]);

  useEffect(()=>{
     axios
        .get("https://randomuser.me/api/?results=12")
     .then((response) => {

       const pessoa = response.data.results.map((item)=>{
         return {nome: `${item.name.first} ${item.name.last}`, email: item.email, foto: item.picture.large, user: item.login.username, idade: item.dob.age}
       })
       
        
      
       
       setPessoas(pessoa);
       }
          )
     .catch((err) => {
       console.error("ops! ocorreu um erro" + err);
     })
  },[]);

  console.log(pessoas)
  
  return(
    <>
      <Header />
      <section class='cards'>
 <div class="box">
    {pessoas.map((item,index)=><div key={index}>
      
      <div class="card">
        <div class="imgBx">
            <img src={item.foto}  alt="images"/>
        </div>
        <div class="details">
            <h2>{item.nome}</h2>
          <div> {item.email}</div>
          <div>User: {item.user}</div>
          <div>Idade: {item.idade}</div>

        </div>
      </div>
   
        </div>)}
   </div>
</section>


      <Pagination />
    </>
    
  )
}