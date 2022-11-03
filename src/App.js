import './App.css';
import { Review2 } from './Components';

function App() {
  let text = 'Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.'
  return (
    <div className="App">
      {/* <Review rate={5} text={text} /> */}
      <Review2 />
    </div>
  );

}

export default App;
