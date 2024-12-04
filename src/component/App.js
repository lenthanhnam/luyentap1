
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import { Menu } from './Menu';
import { Home } from './Home';
import { About } from './About';
import { Product } from './Product';
import { Contact } from './Contact';
import { OneProduct } from './OneProduct';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/oneproduct/:id" element={<OneProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
