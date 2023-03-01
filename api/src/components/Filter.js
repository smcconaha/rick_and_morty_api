import React from "react";

/* <div className="my-3">
    <div className="form-check">
        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="">
            <label className="form-check-label" for="credit">Credit card</label>
        </input>
    </div>
</div> */


function Filter(props) {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark filterTextBox">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"></svg>
                <span className="fs-4">Filters</span>
            </a>
            <div>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Status
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <div className="my-3">
                                    <div className="form-check">
                                        <input name="status" type="radio" className="form-check-input" checked="" required="" />
                                        <label
                                            className="form-check-label"
                                            for="alive">
                                            alive
                                        </label>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input name="status" type="radio" className="form-check-input" checked="" required="" />
                                        <label
                                            className="form-check-label"
                                            for="dead">
                                            dead
                                        </label>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input name="status" type="radio" className="form-check-input" checked="" required="" />
                                        <label
                                            className="form-check-label"
                                            for="unknown">
                                            unknown
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Species
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Gender
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <div className="my-3">
                                    <div className="form-check">
                                        <input name="gender" type="radio" className="form-check-input" checked="" required="" />
                                        <label
                                            className="form-check-label"
                                            for="male">
                                            male
                                        </label>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input name="gender" type="radio" className="form-check-input" checked="" required="" />
                                        <label
                                            className="form-check-label"
                                            for="female">
                                            female
                                        </label>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input name="gender" type="radio" className="form-check-input" checked="" required="" />
                                        <label
                                            className="form-check-label"
                                            for="genderless">
                                            genderless
                                        </label>
                                    </div>
                                </div> 
                                <div className="my-3">
                                    <div className="form-check">
                                        <input name="gender" type="radio" className="form-check-input" checked="" required="" />
                                        <label
                                            className="form-check-label"
                                            for="unknown">
                                            unknown
                                        </label>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filter;