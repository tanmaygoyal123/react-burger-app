import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-react-910aa.firebaseio.com/'
});

export default instance;
