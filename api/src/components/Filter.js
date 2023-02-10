import React, { useState , useEffect} from "react";

function Filter(props) {
    // //this returns the number of pages available
    // console.log(props.charData.info.pages)
    const [count, setCount] = useState(1);

    return (
        <>
            <div className="row justify-content-center">
                <div className = "col text-center">
                    <p className="page-text"><small className="text-muted">Page {count} of {props.charData.info.pages}</small></p>
                </div>
            </div>        
            <div className="row">
                <div className = "col pagination justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" onClick={() => setCount(count -1)}>Previous</a>
                            </li>
                            <li class="page-item">
                                <a className="page-link" onClick={() => setCount(count + 1)}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Filter;