const initialState = {
  user: null,
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = (user, auth) => ({
  type: LOGIN,
  payload: {
    user,
    auth,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        auth: action.payload.auth,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        auth: null,
      };
    default:
      return state;
  }
};

export default userReducer;
