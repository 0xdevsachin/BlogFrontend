import './App.css';
import Navbar from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/about';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Home} />
          <Route path="/contact" component={Home} />
          <Route path="/signin" component={Home} />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}
export default App;
