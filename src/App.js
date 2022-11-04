import './App.css';
import { Review2,Contact,Services,Product,Log } from './Components';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  let text = 'Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.'
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route path="/" element={<Review2 />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/log" element={<Log />} />
        </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;
