import './App.css';
import Navbar from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Home} />
          <Route path="/work" exact component={Home} />
          <Route path="/contact" exact component={Home} />
          <Route path="/signin" exact component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
