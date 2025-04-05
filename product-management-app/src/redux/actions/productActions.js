import axios from 'axios';

const API = 'http://localhost:3001/products';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
  try {
    const res = await axios.get(API);
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: err.message });
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    await axios.post(API, product);
    dispatch(fetchProducts());
  } catch (err) {
    console.error(err);
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    await axios.put(`${API}/${product.id}`, product);
    dispatch(fetchProducts());
  } catch (err) {
    console.error(err);
  }
};


export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API}/${id}`);
    dispatch(fetchProducts());
  } catch (err) {
    console.error(err);
  }
};
