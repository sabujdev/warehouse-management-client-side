import { useEffect, useState } from "react";

const useProduct = () =>{
    const [product, setProduct] = useState([]);

    useEffect( ()=>{
        fetch('https://afternoon-brushlands-30832.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);
    return [product, setProduct]
}

export default useProduct;