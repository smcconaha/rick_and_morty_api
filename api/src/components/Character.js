import React from "react";

function Character(props) {
    //this returns the number of pages available
    // console.log(props.charData.info.pages)
    let charData = props.charData.results.map(result => 
        (
        <div className="App">
                <div className="char-card d-flex flex-column justify-content-center border border-dark">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={result.image} className="img-fluid" alt="#"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="fs-5 fw-bold mb-4">{result.name}</h5>
                            <ul>
                                <li className="fs-5">Status: {result.status}</li>
                                <li className="fs-5">Species: {result.species}</li>
                                <li className="fs-5">Gender: {result.gender}</li>
                                <li className="fs-5">Origin: {result.origin.name}</li>
                                <li className="fs-5">Last known location: {result.location.name}</li>
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