import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import taskApi from "../api";
import { checkingCredentials, clearErrorMessage, login, logout } from "../store/auth";


export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector(state => state.auth);

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('userTask'));
    const tokenStorage = localStorage.getItem('tokenTask');

    if (userStorage && tokenStorage) {
      dispatch(login(userStorage));
    } else {
      dispatch(logout());
    }
  }, [])

  const startLogin = async ({ username, password }) => {
    dispatch(checkingCredentials());

    try {
      const { data } = await taskApi.post('/auth/login', {username, password});
      console.log(data)
      localStorage.setItem('userTask', JSON.stringify(data.user));
      localStorage.setItem('tokenTask', `Bearer ${data.token}`);
      dispatch(login(data.user))
    } catch (error) {
      dispatch(logout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startRegister = async ({ name, email, password }) => {
    dispatch(checkingCredentials());

    try {
      const { data } = await taskApi.post('/users', {name, email, password});
      dispatch(login(data.user))
    } catch (error) {
      dispatch(logout('Correo electrónico está en uso'));
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startLogout = () => {
    localStorage.removeItem('userTask');
    localStorage.removeItem('tokenTask');
    dispatch(logout());    
  }

  return {
    // Propiedades
    user,
    status,
    errorMessage,

    // Métodos
    startLogin,
    startRegister,
    startLogout
  }
}