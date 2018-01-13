import axios from 'axios';

export function getSliders(){
    return axios.get('/api/slider');
}