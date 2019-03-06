export const initialState = {
  brands: {},
};

export const reducers = {
  setBrands(state, brands) {
    return { ...state, brands };
  },
}
