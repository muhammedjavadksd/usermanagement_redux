import React from 'react'
import { Route, BrowserRouter as Router, Routes, Red } from "react-router-dom";
import UserDashboard from "./Pages/Users/Dashboard";
import UserLogin from "./Pages/Users/Login";
import UserSignup from "./Pages/Users/Register";
import AdminDashboard from "./Pages/Admin/Dashboard";
import LoginAdmin from "./Pages/Admin/Login";
import AddUser from "./Pages/Admin/AddUser";
import EditUser from "./Pages/Admin/EditUser";
import { useSelector } from 'react-redux';

function RouterComponent() {

    let isUserLogged = useSelector((state) => state.userAuth.isLogged);

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={isUserLogged ? <UserDashboard></UserDashboard> : <UserLogin />}> </Route>
                    <Route path="/login" element={isUserLogged ? <UserDashboard></UserDashboard> : <UserLogin />}></Route>
                    <Route path="/register" element={isUserLogged ? <UserDashboard></UserDashboard> : <UserSignup />}></Route>
                    {/* <Route path="/admin" element={data.isAdminLogged ? <AdminDashboard></AdminDashboard> : <LoginAdmin />}></Route>
                    <Route path="/admin/add_user" element={data.isAdminLogged ? <AddUser></AddUser> : <LoginAdmin />}></Route>
                    <Route path="/admin/edit_user/:id" element={data.isAdminLogged ? <EditUser></EditUser> : <LoginAdmin />}></Route> */}

                </Routes>
            </Router>
        </div>
    )
}

export default RouterComponent
