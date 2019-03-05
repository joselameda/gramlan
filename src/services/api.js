import axios from 'axios';
import { apiUrl } from '../config/paths';

class Api {
  static async featchBrands() {
    const response = await axios.get(`${apiUrl}/brands`);
    return response.data.data;
  }
}

export default Api;
