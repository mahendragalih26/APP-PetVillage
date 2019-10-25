const initialState = {
  allAnimals: [],
  animal: [],
  status: "",
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const storeAnimals = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ANIMALS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ANIMALS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ANIMALS_FULFILLED":
      console.log("Dari Reducer = ", action.payload.data.animals);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        allAnimals: action.payload.data,
        status: action.error
      };
    case "GET_ANIMALS_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ANIMALS_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ANIMALS_ID_FULFILLED":
      console.log("Dari Reducer = ", action.payload.data.animals);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        animal: action.payload.data
      };
    case "GET_PAGINATIONS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PAGINATIONS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PAGINATIONS_FULFILLED":
      console.log("Dari Reducer = ", action.payload.data.animals);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        allAnimals: action.payload.data
      };
    case "GET_BY_TYPE_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_BY_TYPE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_BY_TYPE_FULFILLED":
      console.log("Dari Reducer = ", action.payload.data.animals);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        allAnimals: action.payload.data
      };
    default:
      return state;
  }
};

export default storeAnimals;
