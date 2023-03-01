import React from "react";

function Filter(props) {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark filterTextBox">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"></svg>
                <span className="fs-4">Filters</span>
            </a>
            <div>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Status
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Species
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"></svg>
                            Gender
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Filter;