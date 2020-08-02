import React from 'react';
import data from '../data/data.json'
import icon from '../man.svg'
import Resume from './Resume'
import {Link} from 'react-router-dom'

let Home=()=>{
    let card_details=data.profile;
    console.log(card_details);
    return(
        <div className="row justify-content-center">
            {card_details.map( (values,index)=>(
               <section className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
                   <div className="card text-center">
                       <article className="card-body">
                           <img src= {icon} alt="profile image" style={{width:"50%"}} />
                            <h1>{ values.details.name }</h1>
                            <h3 className="text-secondary">{ values.details.role  }</h3>
                            <a href={"tel:"+values.details.mobile}><h4>{ values.details.mobile }</h4></a>
                            <a href={"mailto:"+values.details.email}><h4>{values.details.email}</h4></a>
                            <Link to={{ pathname:'/resume', data1:{id:index} }} className="btn btn-primary">View Profile</Link>
                       </article>
                   </div>
               </section> 
            )

            )}
        </div>
    );
}
export default Home;