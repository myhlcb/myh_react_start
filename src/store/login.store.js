import { makeAutoObservable } from 'mobx';
import { setToken } from '@/utils/token';
import { http } from '@/utils';
class LoginStore {
  token = '';
  constructor() {
    makeAutoObservable(this);
  }
  getToken = async (username, password) => {
    //登录存token
    const res = await http.post('url', { username, password });
    this.token = res.token;
    setToken(this.token);
  };
}
export default LoginStore;
