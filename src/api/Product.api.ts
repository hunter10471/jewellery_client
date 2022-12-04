import axios from 'axios';

export const getProducts = async () => {
  const url = `https://fakestoreapi.com/products/category/jewelery`;
  const res = await axios.get(url);
  return res.data;
};
