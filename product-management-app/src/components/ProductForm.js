import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/actions/productActions';

const ProductForm = ({ selectedProduct, clearEdit }) => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    if (selectedProduct) setForm(selectedProduct);
  }, [selectedProduct]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, image, category } = form;
    if (!title || !price || !image || !category) {
      alert('All fields are required');
      return;
    }

    if (selectedProduct) {
      dispatch(updateProduct(form));
    } else {
      dispatch(addProduct(form));
    }

    setForm({ title: '', price: '', image: '', category: '' });
    clearEdit();
  };

  return (
    <div className="mb-4">
      <h2>{selectedProduct ? 'Edit' : 'Add'} Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" />
        <input name="price" value={form.price} onChange={handleChange} type="number" className="form-control mb-2" placeholder="Price" />
        <input name="image" value={form.image} onChange={handleChange} className="form-control mb-2" placeholder="Image URL" />
        <input name="category" value={form.category} onChange={handleChange} className="form-control mb-2" placeholder="Category" />
        <button className="btn btn-success">{selectedProduct ? 'Update' : 'Add'} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
