import React from 'react'

function UserDashBoardComponent() {
    return (
        <div className="col-12 col-md-12 col-lg-9 col-xl-8">
            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>

                <div className="card-body p-5 text-center">

                    <div className="md-5 mt-md-4">

                        <h2 className="fw-bold mb-2 text-uppercase">WELCOME Username</h2>
                        <p className="text-white-50 mb-5">You have successfully logged in</p>

                        <div className="d-flex justify-content-center mb-5">
                            <div className="boxCard" style={{width: "300px"}}>
                                <div className="myCard p-2">
                                    <div className="image-avatar">
                                        <div className="imgBox">
                                            <img height="300px"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-outline">
                                            <label className="form-label" for="firstName">Profile</label>
                                            <input type="file" id="firstName" name="firstname" className="form-control form-control-lg"
                                                required="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <button className="btn btn-outline-light btn-lg px-5">LOGOUT</button>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserDashBoardComponent
