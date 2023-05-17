import axios from 'axios';

const baseURL = 'https://lenasoftware.com/api/v1/en/maestro';

const axiosConfig = axios.create({
  baseURL,
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
});

export default axiosConfig;
