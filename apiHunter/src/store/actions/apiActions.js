export const FETCH_APIS_REQUEST = "FETCH_APIS_REQUEST";
export const FETCH_APIS_SUCCESS = "FETCH_APIS_SUCCESS";
export const FETCH_APIS_FAILURE = "FETCH_APIS_FAILURE";

export const fetchApis = () => async (dispatch) => {
  dispatch({ type: FETCH_APIS_REQUEST });

  try {
    const response = await fetch("https://api.publicapis.org/entries"); 
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    dispatch({ type: FETCH_APIS_SUCCESS, payload: data.entries });
  } catch (error) {
    dispatch({ type: FETCH_APIS_FAILURE, payload: error.message });
  }
};
