import React from "react";

function Filter(props) {
    // //this returns the number of pages available
    let setPage = props.setPage;
    let page = props.page;
    function pageUp () {
        console.log(page)
        console.log(props.charData.info.pages)
        if (page > 0 && page < props.charData.info.pages) {
            setPage(page +1)
        }
    }

    function pageDown () {
        if (page > 1 && page <= props.charData.info.pages) {
            setPage(page -1)
        }
    }

    return (
        <div className="footer fixed-bottom">
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
                                <button className="page-link" onClick={() => pageDown()}>Previous</button>
                            </li>
                            <li class="page-item">
                                <button className="page-link" onClick={() => pageUp()}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Filter;