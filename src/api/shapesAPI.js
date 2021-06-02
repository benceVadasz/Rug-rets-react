import axios from "axios";

const url = 'http://localhost:5000/design'

export const fetchShapes = () => axios.get(url)