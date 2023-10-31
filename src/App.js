import './App.css';
import Navbar from './Organisms/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './Store/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartCard from './Organisms/Cart/CartCard';
import Footer from './Organisms/Footer/Footer';
import ProductContainers from './Organisms/ProductsContainer/ProductContainer';





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
