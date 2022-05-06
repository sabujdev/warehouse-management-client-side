import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const Checkout = () => {
    const {productId} = useParams()
    const [product] = useProductDetail(productId)
    console.log(product);

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Checkout: {product.name}</h2>
            <form>
                <input className='w-50 mb-2' type="text" name='name' placeholder='name' required />
                <br />
                <input className='w-50 mb-2' type="email" name='email' placeholder='email' required />
                <br />
                <input className='w-50 mb-2' type="text" name='product' value={product.name} placeholder='product' required />
                <br />
                <input className='w-50 mb-2' type="text" name='address' placeholder='address' required />
                <br />
                <input className='w-50 mb-2' type="text" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>
        </div>
    );
    
};

export default Checkout;