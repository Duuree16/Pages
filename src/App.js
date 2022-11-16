import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import {Blog, Head,Header,Footer,Post} from './Pieces'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
      <Header/>
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );

}

export default App;
