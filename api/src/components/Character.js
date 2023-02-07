import React from "react";

function Character(props) {
    // console.log(props.charData.results.map(result => result.name));
    let charData = props.charData.results.map(result => 
        (
            <div className='col-3'>
            <div className="char-card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={result.image} className="img-fluid rounded-start" alt="#"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{result.name}</h5>
                        <p className="card-text">Status: {result.status}</p>
                        <p className="card-text">Species: {result.species}</p>
                        <p className="card-text">Gender: {result.gender}</p>
                        <p className="card-text">Origin: {result.origin.name}</p>
                        <p className="card-text">Last known location: {result.location.name}</p>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    );

    return (
        <>{charData}</>
    )
}
export default Character;