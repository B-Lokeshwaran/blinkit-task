import './App.css';
import Navbar from './organisms/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store/Store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartCard from './organisms/cart/CartCard';
import Footer from './organisms/footer/Footer';
import ProductListing from './pages/productListing';





function App() {
  return (
    <div className="App">
      
      <Provider store ={store}>
      <Router>
      <Navbar/>
     
        <Routes>
        <Route path='/' element={<ProductListing/>} />
        <Route path='/cart' element={<CartCard/>}/>
        </Routes>
      </Router>
      
      <Footer/>
      </Provider>
      
    </div>
  );
}

export default App;
