
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct/AddProduct';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/ReuireAuth';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import ManageProduct from './Pages/ManageProducrt/ManageProduct';
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
        <Route path='/checkout/:productId' element={
              <RequireAuth>
                <Checkout></Checkout>
              </RequireAuth>
        }></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          {/* <Route path='/resetPass' element={<ResetPassword></ResetPassword>}></Route> */}

          <Route path="/addProduct" element={
          <RequireAuth>
          <AddProduct></AddProduct>
        </RequireAuth>
        }></Route>
          <Route path="/manage" element={
          <RequireAuth>
          <ManageProduct></ManageProduct>
        </RequireAuth>
        }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
