import axios from 'axios';
export const production = true


axios.defaults.baseURL = production ? 'https://backend.seraphinwoodwall.com/api/' : "http://localhost:1337/api/"

export default axios
