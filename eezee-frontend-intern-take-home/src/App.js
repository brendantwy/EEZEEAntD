import './App.css';
import Home from './components/home/Home'
import { Product } from './components/product/Product';
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Product />} />
    </Routes>
  );
}

export default App;
