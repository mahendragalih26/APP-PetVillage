import Axios from "axios";

export const getAnimals = () => {
  return {
    type: "GET_ANIMALS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/v2/animals`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
  };
};

export const getAnimalById = id => {
  return {
    type: "GET_ANIMALS_ID",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/v2/animals/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
  };
};

export const myPagination = endPoint => {
  return {
    type: "GET_PAGINATIONS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}${endPoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
  };
};
