import { accountsAction } from "../store/root/root.action";
import { store } from '../store';
class UserService {
  async fetchUsers() {
    store.dispatch(accountsAction.init());
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    store.dispatch(accountsAction.success(result));
  }
}

export default new UserService();