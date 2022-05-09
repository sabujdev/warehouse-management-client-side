import { Link, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  // console.log(product);

  return (
    <div>
      <div className="d-flex justify-content-center m-4">
        <div>
          {product._id}
          <h3>Product Name: {product.name}</h3>
          {
            // <img src={product.img} alt="" />
          }
          <p>Supplier Name: {product.seller}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
          <p> {product.description}</p>
        </div>
      </div>

      <div className="d-flex justify-content-around">
            <div className="text-center">
            <Link to="/manage">
                <button className="btn btn-primary">Manage Inventory</button>
            </Link>
            </div>
            <div className="text-center">
            <Link to={`/checkout/${productId}`}>
                <button className="btn btn-success">Deliver</button>
            </Link>
            </div>
      </div>
    </div>
  );
};

export default ProductDetail;
