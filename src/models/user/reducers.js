import update from 'immutability-helper';

export const initialState = {
  user: {},
};

export const reducers = {

  setUser(state, user) {
    return update(state, {
      user: {
        $set: user,
      },
    });
  },
};
