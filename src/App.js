import './App.css';
import {
  BrowserRouter as Router
  , Routes, Route, Link
} from 'react-router-dom';
import Home from './component/pages/Home/Home';
import DogsPage from './component/pages/Dogs/DogsPage';
import Cart from './component/pages/Cart/Cart';
import NavBar from './Navbar';
import { useEffect, useState } from 'react';
import { CartContext } from './Context/CartContext';

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  useEffect(() => {

    async function getData() {
      const res = await fetch('http://localhost:3000/dogs');
      return res;
    }

    getData()
      .then(res => res.json())
      .then(data => setAllDogs(data))
      .catch(e => console.log(e))
  }, []);

  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <NavBar />
        <div className="page-container">
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/dogs'
              element={<DogsPage allDogs={allDogs} />}
            />
            <Route
              path='/checkout'
              element={<Cart />}
            />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
