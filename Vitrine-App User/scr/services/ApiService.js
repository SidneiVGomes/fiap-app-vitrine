import axios from 'axios';

const ApiService = axios.create({
   baseURL: 'https://petmagnet-api.herokuapp.com/API/',
   headers: { 
      Accept: 'application/json'
   }   
});

export default ApiService;