import Axios from "axios";

export const SignUp = data => dispatch => {
  dispatch({ type: "USER_SIGNUP", value: true });
  return firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(res => {
      console.log("succes fro action = ", res);
    });
};

export const getAnimals = token => {
  return {
    type: "GET_ANIMALS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/v2/animals`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_TOKEN}`
      }
    })
  };
};
