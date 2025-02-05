import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  let [product, setproduct] = useState({});
  const getProducts = async () => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setproduct(res.data);
   
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default Details;