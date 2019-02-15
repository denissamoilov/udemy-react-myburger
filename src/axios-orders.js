import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4c080.firebaseio.com/'
})

export default instance;