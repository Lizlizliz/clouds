import axios from 'axios';

export function getSliders(){
    return axios.get('/api/slider');//加api的原因：为了简便，所有的api下的接口都是跨域端口3000；
}

export function getHot(){
    return axios.get('/api/hot');
}

export function getBook(){
    return axios.get('/api/book');
}

export function addBook(data){
    return axios.post('/api/book',data);
}

export function removeBook(id){
return axios.delete('/api/book?id='+id);
}

export function getOneBook(id){
    return axios.get('/api/book?id='+id);
}

export function updateBook(id,data){
    return axios.put('/api/book?id='+id,data);
}