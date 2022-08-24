import axios from 'axios';
import { SET_ERROR, TOGGLE_IS_FETCHING, GET_ALL_USERS } from '../../constants';

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const users = getState().randomUsers.users;
    if (users.length) return;
    dispatch(toggleIsFetching(true));
    const response = await axios
      .get('https://randomuser.me/api/?results=20')
      .then((res) => {
        dispatch(getUsersAction(res.data.results));
      })
      .catch((e) => {
        dispatch({
          type: SET_ERROR,
        });
      })
      .finally(() => dispatch(toggleIsFetching(false)));
  };
};

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getUsersAction = (payload) => ({
  type: GET_ALL_USERS,
  payload,
});
