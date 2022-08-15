/*
when we have a token we send it with every request
*/ 

import axios from 'axios';
const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token']=token;
    }else{
        delete axios.default.headers.common['x-auth-token'];
    }
};
export default setAuthToken;
