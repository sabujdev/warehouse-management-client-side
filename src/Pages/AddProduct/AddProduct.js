import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    console.log(register);

    const addProduct = () =>{
        toast('Product added');
        // console.log('Product added');
    }

    const onSubmit = data => {
        console.log(data);
        const url = `https://afternoon-brushlands-30832.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Seller' type="text" {...register("seller")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" onClick={addProduct} value="Add Service" />
                {
                    <ToastContainer></ToastContainer>
                }
            </form>
        </div>
    );
};

export default AddProduct;