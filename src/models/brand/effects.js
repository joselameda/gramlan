import api from '../../services/api';

const effects = {

  async fetchBrands() {
    const brands = await api.fetchBrands();
    this.setBrands(brands);
  },
}

export default effects;
