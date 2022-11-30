import axios from "./index";
import { API_SERVER } from "config/constant";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${API_SERVER}/login`, data);
  };

  static Register = (data) => {
    return axios.post(`${API_SERVER}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${API_SERVER}api/users/logout`, data, {
      headers: { Authorization: `${data.token}` },
    });
  };
}

export default AuthApi;
