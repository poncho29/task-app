import { useDispatch, useSelector } from "react-redux"

import taskApi from "../api";
import { checkingCredentials, clearErrorMessage, login, logout } from "../store/auth";


export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector(state => state.auth);

  const startLogin = async ({ username, password }) => {
    dispatch(checkingCredentials());

    try {
      const { data } = await taskApi.post('/auth/login', {username, password});
      localStorage.setItem('tokenTask', data.token);
      dispatch(login(data.user))
    } catch (error) {
      dispatch(logout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  return {
    // Propiedades
    user,
    status,
    errorMessage,

    // Métodos
    startLogin
  }
}