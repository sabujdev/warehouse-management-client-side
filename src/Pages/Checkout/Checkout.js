import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../src/firebase.init';
import useProductDetail from '../../hooks/useProductDetail';
const Checkout = () => {
    const {productId} = useParams()
    const [product] = useProductDetail(productId)
    const [user, ] = useAuthState(auth);
    // console.log(user);

    const handlePlaceOrder = (e)=>{
        e.preventDefault()
        const order = {
            email:user.email,
            product : product.name,
            ProductId :productId,
            address:e.target.address.value,
            phone:e.target.phone.value,
        }
        axios.post('http://localhost:5000/order' ,order)
        .then(res =>{
            const {data} = res;
            if(data.insertedId){
                toast('Your order is booked!!!');
                e.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {product.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={product.name} name="service" placeholder='service' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
    
};

export default Checkout;