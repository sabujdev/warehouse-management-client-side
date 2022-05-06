
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>

         

        <Route path='/checkout/:productId' element={<Checkout></Checkout>}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
