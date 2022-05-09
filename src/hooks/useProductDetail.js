
import { useEffect, useState } from 'react';

const useProductDetail = productId => {
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://afternoon-brushlands-30832.herokuapp.com/product/${productId}`;
        // console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [productId])
    return [product]

  
};

export default useProductDetail;