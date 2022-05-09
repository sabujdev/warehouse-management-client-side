import React from 'react';
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
            {
                product.map(product => <div key={product._id}>
                    <h5>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageProduct;