import axios from 'axios';
import { BASE_URL, GET_TOKEN } from './Config';
import { LOGGER } from 'Methods';


const GET_HEADER = () => {
       const token = GET_TOKEN();

       if(token){
           return {
               'Content-Type': 'application/json',
               Authorization:  'Bearer ' + token
           }
       }
    return { 'Content-Type': 'application/json' };
};

export const SERVER_REQUEST = async (url, type, body) => {

    try {

          const response = type.toLowerCase() === 'post'
             ? await axios.post(`${BASE_URL}${url}`, body, { headers: GET_HEADER() })
             : await axios.get(`${BASE_URL}${url}`, { headers: GET_HEADER() });

        return response.data;
    }catch(error){
        //console.log(error.response.data);
        //LOGGER(`${url} error`, error);
        const response =  await error.response.data;
        return response;

    }
};


