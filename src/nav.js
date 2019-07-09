import React from 'react';
import image from './logo.png';
import './App.css';






const Nav=() =>{
   
   return  <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand d-flex" href="#">
         <img className="img  " src={image} alt=""/>
            <p className="font-weight-bold ml-3">Docplanner</p>
            <p className="font-weight-bolder ">Group</p>
         
   
   </a>
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"  >
        <div className="toggler-btn">
               <div class ="bar bar1"></div>
               <div class ="bar bar2"></div>
               <div class ="bar bar3"></div>   
               <div class ="bar bar4"></div>
        </div>
     </button>
     
     
 
    
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <ul class="navbar-nav mx-auto ">
          <li class="nav-item">
              <a class=" nav-link active text-capitalize" href="index.html">About us </a>
         </li>
       <li class="nav-item">
            <a class=" nav-link text-capitalize" href="index.html">Career </a>
       </li> 
       <li class="nav-item">
        <a class=" nav-link text-capitalize" href="index.html"> Departements </a>
   </li>
   
      </ul>
      
    </div>
  



</nav>
}

export default Nav;