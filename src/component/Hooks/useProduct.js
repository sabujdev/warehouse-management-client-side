
import axios from "axios";
import { useEffect, useState } from "react";
const useProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("products.json").then((res) => setProducts(res.data));
  }, []);

  return [products, setProducts];
};

export default useProduct;