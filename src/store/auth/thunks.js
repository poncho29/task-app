import { checkingCredentials } from "./"

export const checkingAuthentication = (email, password) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startCreatingUserWithCredentials = ({ name, email, password }) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  }
}