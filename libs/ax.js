import axios from "axios";

const ax = axios.create({
    baseURL : "http://0.0.0.0:9000/api",
    responseType : "json"
})

export default ax