import axios from 'axios';

export default class UserService {
  static async getUsers() {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=20`);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
