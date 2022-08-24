import { GET_ALL_USERS, TOGGLE_IS_FETCHING, SET_ERROR } from '../constants';

const defaultState = {
  users: [],
  isFetching: false,
  error: false,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    case SET_ERROR:
      return { ...defaultState, error: action.payload };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
