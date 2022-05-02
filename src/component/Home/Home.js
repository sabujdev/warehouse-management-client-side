import React from 'react';
import useProduct from '../Hooks/useProduct';


const Home = () => {

    const [products] = useProduct()
    return (
        <div>
           <section></section>
           <section>
               {products.slice(0.6).map(product =>{})}
           </section>
           <section></section>
            
          
        </div>
    );
};

export default Home;