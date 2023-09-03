

import axios from "axios"
import instance from "./axios/axios"

const API_CALL = {
    userLogin: (username, password) => {
        return axios.post("http://localhost:7000/user_login", {
            username: username,
            password: password
        }) 
    },

    userSignup: function (userdata) {
        return instance.post("/user_registration", { ...userdata })
    },


    profilePictureUpdate: function (user, profile) {
        return instance.post("/user_registration", {
            user: user,
            profile: profile
        })
    },

    adminLogin: function (username, password) {
        return instance.post("/admin/admin_login", {
            username, password
        })
    },

    getUser: function (user_id) {
        return instance.get("/admin/admin_login", { params: user_id })
    },

    updateUser: function (user) {
        return instance.post("/admin/update_user", user)
    },


    deleteUser: function (user_id) {
        return instance.post("/admin/delete_user", user_id)
    },

    addUser: function (userdata) {
        return instance.post("/admin/delete_user", {...userdata})
    }
}


export default API_CALL;