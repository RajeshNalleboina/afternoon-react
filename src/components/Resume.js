import React from 'react'
import data from '../data/data.json'


export default function Resume(props) {
    let info=data.profile[props.location.data1.id];

    return (
        <div className="row">
            <div className="col-lg-3 m-2">
                <div className="card">
                    <div className="card-body">
                        <h1>{info.details.name}</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 m-2">
                <h2>Career Object:</h2>
                <hr />
                    <p>{info.co}</p>
            </div>
        </div>
    )
}
