import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Pagination from './api/src/Pagination.js';





export default function Profile(){
  
  const [filter, setFilter]=useState('');
  const [pessoas, setPessoas]=useState([{nome:'', email:'', user:''}]);
  const [currentPage,setCurrentPage]=useState(1);

  useEffect(()=>{
    if(filter){
      setCurrentPage(1);
    }
  },[filter])
  
  

  useEffect(()=>{
     axios
        .get("https://randomuser.me/api/?results=120")
     .then((response) => {

       const pessoa = response.data.results.map((item)=>{
         return {nome: `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`, email: item.email, foto: item.picture.large, user: item.login.username.toLowerCase(), idade: item.dob.age}
       })
  
       setPessoas(pessoa);
       }
          )
     .catch((err) => {
       console.error("ops! ocorreu um erro" + err);
     })
  },[]);

 

    let pageSize = 12;
    const offset = (currentPage - 1) * pageSize;
    const filteredPessoas = pessoas.filter(({nome,email, user})=>nome.includes(filter.toUpperCase())||email.includes(filter.toLowerCase())||user.includes(filter.toLowerCase()));
    const currentData = filteredPessoas.slice(offset, offset + pageSize);



  
  return(
    <>
      <Header onChangeSearch={e=>setFilter(e)} />
      <section className='cards'>
 <div className="box">
    {currentData.map((item,index)=><div key={index}>
      
      <div className="card">
        <div className="imgBx" >
            <img src={item.foto}  alt="images"/>
        </div>
        <div className="details">
            <h2>{item.nome}</h2>
          <div> {item.email}</div>
          <div>User: {item.user}</div>
          <div>Idade: {item.idade}</div>

        </div>
      </div>
   
        </div>)}
   </div>
</section>

<Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={pessoas.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      
    </>
    
  )
}