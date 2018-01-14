import axios from 'axios';

export function getSliders(){
    return axios.get('/api/slider');//加api的原因：为了简便，所有的api下的接口都是跨域端口3000；
}

export function getHot(){
    return axios.get('/api/hot');
}