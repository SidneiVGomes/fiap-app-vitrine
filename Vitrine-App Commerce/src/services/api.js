import axios from 'axios';

const api = axios.create({
  baseURL: 'https://petmagnet-api.herokuapp.com'
  // baseURL: 'https://us-central1-petsmagnet.cloudfunctions.net'
});

export default api;