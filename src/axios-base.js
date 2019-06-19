import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-demo-c4f33.firebaseio.com/"
});

export default instance;