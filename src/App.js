import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/HomePage/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
