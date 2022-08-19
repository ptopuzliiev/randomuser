import axios from 'axios';
import { getUsersAction, toggleIsFetching } from '../userReducer';

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await axios
      .get('https://randomuser.me/api/?results=20')
      .then((res) => {
        dispatch(getUsersAction(res.data.results));
        dispatch(toggleIsFetching(false));
      });
  };
};
