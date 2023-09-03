import React from 'react'

function AddUserForm() {
    return (

        <div class="col-12 col-lg-9 col-xl-7">
            <div class="card bg-dark text-white shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                <div class="card-body p-4 p-md-5">

                    <div class="text-center">
                        <h2 class="mb-2">Add user</h2>
                        <p>Add new user by filling below form </p>
                    </div>

                    <form id="signupform" method="post" action="/update" onsubmit="return validateForm()">

                        <div class="row">

                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <label class="form-label" for="firstName">Full Name</label>
                                    <input type="text" id="firstName" name="firstname"
                                        class="form-control form-control-lg" required/>
                                </div>
                            </div>


                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <label class="form-label" for="firstName">Username</label>
                                    <input type="text" id="firstName" name="firstname"
                                        class="form-control form-control-lg" required/>
                                </div>
                            </div>

                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <label class="form-label" for="firstName">Phone</label>
                                    <input type="text" id="firstName" name="firstname"
                                        class="form-control form-control-lg" required/>
                                </div>
                            </div>

                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <label class="form-label" for="firstName">Email Address</label>
                                    <input type="text" id="firstName" name="firstname"
                                        class="form-control form-control-lg" required/>
                                </div>
                            </div>


                            <div class="col-md-12">
                                <div class="form-outline">
                                    <label class="form-label" for="firstName">Profile</label>
                                    <input type="file" id="firstName" name="firstname"
                                        class="form-control form-control-lg" required/>
                                </div>
                            </div>


                        </div>


                        <div class="mt-3 pt-2">
                            <input class="btn btn-primary btn-lg" type="submit" value="Update" />
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddUserForm
