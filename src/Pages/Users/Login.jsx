import React, { useState } from 'react'
import LoginScreen from '../../Component/Login/Login'
import Background from '../../Component/UI/Background'
import '../../Style/UserStyle.css'
import { userLoginAction } from '../../Redux/slice/user-slicer';
import { useDispatch, useSelector } from 'react-redux';

function UserLogin() {

    let dispatcher = useDispatch();

    let [username, usernameDispatcher] = useState();
    let [password, passwordDispatcher] = useState();
    let currentUserState = useSelector(state => state.userAuth.isLogged)

   // alert(currentUserState)
    let handleLogin = async function (e) { 
        e.preventDefault()  

        await dispatcher(userLoginAction({ username, password }))
        alert(currentUserState)
    }

    return (
        <div>
            <Background>
                <LoginScreen form_handler={handleLogin} username_dispatcher={usernameDispatcher} password_dispatcher={passwordDispatcher}></LoginScreen>
            </Background>
        </div>
    )
}

export default UserLogin
