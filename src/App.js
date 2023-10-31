import './App.css';
import Navbar from './organisms/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './Store/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartCard from './organisms/Cart/CartCard';
import Footer from './organisms/Footer/Footer';
import ProductContainers from './organisms/ProductsContainer/ProductContainer';





function App() {
  return (
    <div className="App">
      
      <Provider store ={store}>
      <Router>
      <Navbar/>
     
        <Routes>
        <Route path='/' element={<ProductContainers/>} />
        <Route path='/cart' element={<CartCard/>}/>
        </Routes>
      </Router>
      
      <Footer/>
      </Provider>
      
    </div>
  );
}

export default App;
