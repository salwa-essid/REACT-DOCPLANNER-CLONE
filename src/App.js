import React from 'react';

import './App.css';
import Nav from './nav';
import Skills from './Skills';
import Introduction from './IntroductionText';
import Services from './service';
import Company from './company';
import Card from './card';
import ItemText from './item-text';
import Items from './item';
import image from './warsaw.png';
import Footer from './footer';

let TheItem=[
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'},
  {image:image, name:'warsaw'}]
 
function App() {
  return (
    <div className="App">
       
      <Nav/>
      <Skills/>
      <Introduction/>
      <Services/>
      <Company/>
       
      <Card/>
    
      
      
      <ItemText/>
      
      <div className="organisation py-5">
      <Items itemslist={TheItem}/>
      </div>
     
      <Footer/>
      </div>
  );
}

export default App;
