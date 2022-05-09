import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
const ManageProduct = () => {
    const [product, setProduct] = useProduct()

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://afternoon-brushlands-30832.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = product.filter(product => product._id !== id);
                setProduct(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Product</h2>
            <table class="table table">
            <thead className='bg-success'>
                  <tr>
                    <th>Product</th>
                    <th>Img</th>
                    <th>Seller</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
            </thead>
              </table>

         

            {
                product.map(product => <table class="table table-info" key={product._id}>
                <tbody>
                  <tr>
                    <td>{product.name}</td>
                    <td><img className="w-50 h-50" src={product.img} alt="" /></td>
                    <td>{product.seller}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
                  </tr>
                </tbody>
              </table>)
            }



{/* <div key={product._id}>
                    <h5>{product.name} <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button></h5>
                </div> */}

<div className="d-flex justify-content-around">
            <div className="text-center">
            <Link to="/addProduct">
                <button className="btn btn-primary">Add New Item</button>
            </Link>
            </div>
        
      </div>
        </div>
    );
};

export default ManageProduct;