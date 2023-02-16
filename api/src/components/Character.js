import React from "react";

function Character(props) {
    //this returns the number of pages available
    console.log(props.charData.info.pages)

    let charData = props.charData.results.map(result => 
        (
        <div className="App">
            <h1 className="text-center mb-3">Characters</h1>
                <div className="char-card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={result.image} className="img-fluid rounded-start" alt="#"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{result.name}</h5>
                            <ul>
                                <li className="card-text">Status: {result.status}</li>
                                <li className="card-text">Species: {result.species}</li>
                                <li className="card-text">Gender: {result.gender}</li>
                                <li className="card-text">Origin: {result.origin.name}</li>
                                <li className="card-text">Last known location: {result.location.name}</li>
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