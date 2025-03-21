import { FETCH_APIS_REQUEST, FETCH_APIS_SUCCESS, FETCH_APIS_FAILURE } from "../actions/apiActions";

const initialState = {
  apis: [],
  loading: false,
  error: null,
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APIS_REQUEST:
      return { ...state, loading: true };
    case FETCH_APIS_SUCCESS:
      return { ...state, loading: false, apis: action.payload };
    case FETCH_APIS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
