import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import RequiredAuth from './RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Toaster/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
