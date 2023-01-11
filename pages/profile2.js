import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Pagination from './api/src/Pagination.js';





export default function profile(){
  
  const [currentPage, setCurrentPage] = useState(1);

  const [pessoas, setPessoas]=useState([{}]);

  
  

  useEffect(()=>{
     axios
        .get("https://randomuser.me/api/?results=120")
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

    let pageSize = 12;
    const offset = (currentPage - 1) * pageSize;
    const currentData = pessoas.slice(offset, offset + pageSize)

 

  console.log(currentData)
  
  return(
    <>
      <Header />
      <section class='cards'>
 <div class="box">
    {currentData.map((item,index)=><div key={index}>
      
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