import React from "react";


export default function Welcome(props) {
    
    return (
        <div>
           <h1> {props.name} </h1> 
           {props.children}
        </div>
    )
}

// import React, { Component } from 'react'

// export default class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{ this.props.name }</h1>
//             </div>
//         )
//     }
// }
