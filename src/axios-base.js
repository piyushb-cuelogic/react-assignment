import axios from "axios";
import { FIREBASE_API } from "./constants"

const instance = axios.create({
    baseURL: FIREBASE_API
});

export default instance;