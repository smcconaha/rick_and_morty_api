import React from "react";

function Filter(props) {
    // //this returns the number of pages available
    // console.log(props.charData.info.pages)
    let setPage = props.setPage;
    let page = props.page;
    return (
        <>
            <div className="row justify-content-center">
                <div className = "col text-center">
                    <p className="page-text"><small className="text-muted">Page {page} of {props.charData.info.pages}</small></p>
                </div>
            </div>        
            <div className="row">
                <div className = "col pagination justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <button className="page-link" onClick={() => setPage(page -1)}>Previous</button>
                            </li>
                            <li class="page-item">
                                <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Filter;