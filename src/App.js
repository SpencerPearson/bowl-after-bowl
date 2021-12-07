import "./App.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import Episodes from "./Components/Episodes/Episodes";
import NotFound from "./Components/NotFound";
import V4V from "./Components/V4V/V4V";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/episodes" component={Episodes} />
            <Route path ="/v4v" component={V4V} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
