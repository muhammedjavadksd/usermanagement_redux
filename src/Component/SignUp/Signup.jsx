import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    
    return (
        <div className="col-8">
            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5">

                    <div className="md-5 mt-md-4">

                        <div className="text-center">
                            <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                            <p className="text-white-50 mb-4">Create new account by filling below form</p>
                        </div>


                        <form id="signupform" method="post" action="/update" onsubmit="return validateForm()">

                            <div className="row">

                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="firstName">Full Name</label>
                                        <input type="text" id="firstName" name="firstname" className="form-control form-control-lg" required=""/>
                                    </div>
                                </div>


                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="firstName">Username</label>
                                        <input type="text" id="firstName" name="firstname" className="form-control form-control-lg" required=""/>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="firstName">Phone</label>
                                        <input type="text" id="firstName" name="firstname" className="form-control form-control-lg" required=""/>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="firstName">Email Address</label>
                                        <input type="text" id="firstName" name="firstname" className="form-control form-control-lg" required=""/>
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-outline">
                                        <label className="form-label" for="firstName">Profile</label>
                                        <input type="file" id="firstName" name="firstname" className="form-control form-control-lg" required=""/>
                                    </div>
                                </div>


                            </div>


                            <div className="mt-3 pt-2">
                                <input className="btn btn-primary btn-lg" type="submit" value="Sign up"/>
                            </div>

                        </form>


                        <div className="d-flex justify-content-center text-center mt-3 pt-1">
                            <Link to="/login" className="text-white">Not registered? Sign up here!!</Link>
                        </div>




                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signup
