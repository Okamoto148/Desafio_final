import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Pagination from './Components/Pagination';
import styles from '../styles/Profile.module.css';



export default function profile(){

  const [pessoas, setPessoas]=useState([{}]);

  useEffect(()=>{
     axios
        .get("https://randomuser.me/api/?results=10")
     .then((response) => {

       const pessoa = response.data.results.map((item)=>{
         return {nome: `${item.name.first} ${item.name.last}`, email: item.email, foto: item.picture.large, user: item.username, idade: item.dob.age}
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
      <section>
 <div class="box">
    {pessoas.map((item,index)=><div key={index}>
      
      <div class="card">
        <div class="imgBx">
            <img src={item.foto}  alt="images"/>
        </div>
        <div class="details">
            <h2>{item.nome}</h2>
          <p>{item.email} {item.user} {item.idade}</p>
        </div>
      </div>
   
        </div>)}
   </div>
</section>


      <Pagination />
    </>
    
  )
}