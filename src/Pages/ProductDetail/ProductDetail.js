
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';


const ProductDetail = () => {
    const { productId } = useParams();
const [product] = useProductDetail(productId)
// console.log(product);

    return (
        <div>
            <div>
            {product._id}
            <h2>Product Name: {product.name}</h2>
            {
                // <img src={product.img} alt="" />
            }
            <p>Supplier Name: {product.seller}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
            <p> {product.description}</p>
            </div>
            <div className='text-center'>
                <Link to={`/checkout/${productId}`}>
                    <button className='btn btn-primary'>Deliver</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;