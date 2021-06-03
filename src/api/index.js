import axios from "axios";

const API = axios.create(({baseURL: 'http://localhost:5000'}));

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchShapes = () => API.get('/shapes');
export const uploadShape = (shape) => API.post('/shapes', shape);
export const deleteShape = (id) => API.delete(`/shapes/${id}`);

export const signIn = (formData) => API.post('/user/signIn', formData);
export const signUp = (formData) => API.post('/user/signUp', formData);