import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { data } from '../../const';

function LoginScreen(props) {


     

    let navigate = useNavigate()

 
    return (
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5">

                    <div className="md-5 mt-md-4">

                        <div className="text-center">
                            <h4 className="fw-bold mb-2 text-uppercase">Login</h4>
                            <p className="text-white-50 mb-5">Please enter your email and password!</p>
                        </div>


                        <form onSubmit={props.form_handler}>
                            <div className="form-outline form-white mb-4">
                                <label className="form-label" for="mailid">Username</label>
                                <input type="text" onChange={(e) => {
                                    props.username_dispatcher(e.target.value)
                                }} placeholder="Enter your username" className="form-control form-control-lg" required />
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label" for="password">Password</label>
                                <input type="password" placeholder="Enter password"
                                    onChange={(e) => {
                                        props.password_dispatcher(e.target.value)
                                    }}
                                    className="form-control form-control-lg" required />

                            </div>


                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-light btn-lg px-5">Login</button>
                            </div>
                        </form>


                        <div className="d-flex justify-content-center text-center mt-3 pt-1">
                            <Link to="/register" className="text-white">Not registered? Sign up here!!</Link>
                        </div>




                    </div>


                </div>
            </div>
        </div>
    )
}

export default LoginScreen
