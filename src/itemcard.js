import React from 'react';

import './App.css';

//  function ItemsCard(props){
//      const itemscardlist=props.itemscardlist

//      let itemscardhtml=[]
//              itemscardhtml= itemscardlist.map((itm,i)=>
             
//                    <div className="col-lg-4 smallll-card  mb-0 " >
//                  <div key={i} className="itm " style={{padding:'15px'}}>
//                 <img className="img " src={itm.image}/>
//                 <div className="text  mb-0">
//                 <p> {itm.name}</p>
//                 <p className=" text text-muted "> {itm.paragraphe}</p>
//                 </div>
//                 </div>
//                 </div> 
               
//                )
//     return itemscardhtml
//  }
const FeatureCard = ({icon, title, description}) =>
  <div className="feature-card ">
    <img src={icon} />
    <h2 className="feature-card-title">{title}</h2>
    <p className="feature-card-description">
      {description}
    </p>
  </div>





export default FeatureCard;















