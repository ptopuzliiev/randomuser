import { GET_ALL_USERS, TOGGLE_IS_FETCHING } from '../constants';

const defaultState = {
  users: [],
  isFetching: false,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getUsersAction = (payload) => ({
  type: GET_ALL_USERS,
  payload,
});
