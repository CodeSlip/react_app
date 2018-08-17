import axios from 'axios';

const instance = axios.create( {
    baseURL: "https://burgerbuilder-9473e.firebaseio.com/"})
    
export default instance;
