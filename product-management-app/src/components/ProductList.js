import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductItem from './ProductItem';

const ProductList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { productList, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  const filtered = productList
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => !category || p.category === category)
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price;
      if (sort === 'high') return b.price - a.price;
      return 0;
    });

  const uniqueCategories = [...new Set(productList.map(p => p.category))];


  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input className="form-control" placeholder="Search by title..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {uniqueCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        <select className="form-select" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      <div className="row">
        {filtered.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <ProductItem product={product} onEdit={onEdit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
