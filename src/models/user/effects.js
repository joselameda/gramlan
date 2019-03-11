import api from '../../services/api';

const effects = {

  async fetchUser() {
    const userInfo = await api.fetchUser();
    this.setUser(userInfo);
  },
};

export default effects;
