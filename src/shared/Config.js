export const BASE_URL = "https://calc-lender.herokuapp.com/api/";


export function GET_TOKEN(){
    return localStorage.getItem('token');
}

export function SAVE_TOKEN(token){
    return localStorage.setItem('token', token);
}