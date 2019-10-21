import Axios from "axios";

// export const getToken = token => {
//   return {
//     type: "GET_ACCES",
//     payload: Axios.post(`${process.env.REACT_APP_HOST}/v2/oauth2/token`, {
//       headers: {
//         Authorization: `Bearer ${process.env.REACT_TOKEN}`
//       }
//     })
//   };
// };

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
