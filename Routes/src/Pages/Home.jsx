import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);

    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map(({ id, title }) => (
        <div>
          <Link to={`/product/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;    