import { IS_AUTH } from '../constants';

const defaultState = {
  isAuth: false,
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, isAuth: action.isAuth };
    default:
      return state;
  }
};

export const authAction = (isAuth) => ({
  type: IS_AUTH,
  isAuth,
});
