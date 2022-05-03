import React, { useEffect, useState } from "react";
import Product from "../Product/Product";


import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div id="products" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5"> Inventory Product</h1>
        <div className="product_container">
          {
              products.slice(0,6).map(product =><Product key ={product.id}
                                                        product={product}
              >

              </Product>)
          }

          {
            console.log(products)
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
