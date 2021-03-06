import Axios from 'axios';

const http = Axios.create({
  baseURL: `${process.env.BASE_URL}${process.env.API_VERSION}`,
});

export default http;
