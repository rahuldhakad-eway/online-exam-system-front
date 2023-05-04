import React, { useEffect,useState} from 'react'
import axios from 'axios'

const NavTabs = () => {
   // let [question, setQuestion] = useState([]);
   let [technology, setTechnology] = useState([]);
   useEffect(() => {
      async function show() {
        let res= await axios.post("http://localhost/online-exam-system/api/get-all-technology");
        console.log(res.data.technologies)
        setTechnology(res.data.technologies)
   
      }
      show();
    });
  return (
    <>
     {/* {technology.map((tech)=>{
      return(
         <>
         <h2>{tech.name}</h2>

        

         </>
      )
    })}  */}
    
     {/* <!-- Nav tabs --> */}
            <ul class="nav nav-tabs" role="tablist">
            {technology.map((tech)=>{
      return(
         <>
         {/* <h2>{tech.name}</h2> */}

         <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href={`#${tech.name}`}>{tech.name}</a>
               </li>

         </>
      )
    })} 
           
               {/* <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#PHP">{tech.name}</a>
               </li> */}
               {/* <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#JAVASCRIPT">JAVASCRIPT</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#REACT">REACT</a>
               </li> */}
            </ul>

    </>
  )
}

export default NavTabs