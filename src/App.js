import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
