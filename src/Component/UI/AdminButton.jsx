import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminButton() {


    let navigate = useNavigate()

    function logoutAdmin() {
        alert("Logout admin")
    }


    function addNewUser() {
       navigate("/admin/add_user")
    }

    return (
        <div>
            <h2 className="fw-bold text-uppercase">WELCOME ADMIN</h2>
            <p className="text-white-50 mb-4">You have successfully logged in</p>
            <div className="input-group mb-5 w-100">
                <input type="text" className="form-control" placeholder="Search by Name"
                    id="searchInput" name="searchInput" required />
            </div>


            <div className="d-flex justify-content-between align-items-center mt-3">
                <button onClick={logoutAdmin} className="btn btn-outline-light btn-lg px-5">LOGOUT</button>
                <button onClick={addNewUser} className="btn btn-outline-light btn-lg px-5">New User</button>
            </div>
        </div>
    )
}

export default AdminButton
