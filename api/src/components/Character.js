import React from "react";

function Character(props) {
    let char = props.charData.results
    for (const item of char) {
        console.log(item)
    }
    return (
        <div className='col-3'>
            <div className="char-card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="#" className="img-fluid rounded-start" alt="#"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">props.name</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural 
                            lead-in to additional content. This content is a little bit longer.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Character;