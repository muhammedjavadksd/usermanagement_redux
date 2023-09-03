import axios from "axios";
import { BASE_URL_API } from "../const/constant";

const instance = axios.create({
    baseURL: "http://localhost:7000/" 
})


export default instance