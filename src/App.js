import './App.css';
import Navbar from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import About from './components/about';
import Work from './components/work';
import Signin from './components/signin';
import Signup from './components/signup';
import Dashboard from './components/user/dashboard';
import Write from './components/user/write';
import ReadBlog from './components/user/ReadBlog';
function App() {
  var i = 0;
  const status = () =>{
    const data = localStorage.getItem('Bloglogin');
    if(data){
      i = 1;
    }
    console.log(i);
  }
  status();
  return (
    <Router>
    <div className="App">
      <Navbar index={i} />
        <Switch>
          {i === 1 ? (
            <>
             <Route path="/" exact component={Dashboard} />
             <Route path="/write" component={Write} />
             <Route path="/blogs" component={Work} />
             <Redirect from="*" to="/" />
             </>
          ) :(
            <>
           <Route path="/" exact component={Home} />
           <Route path="/about" component={About} />
           <Route path="/blogs" component={Work} />
           <Route path="/contact" component={Home} />
           <Route path="/signin" component={Signin} />
           <Route path="/signup" component={Signup} />
           <Redirect from="*" to="/" />
           </>
          )}
          <Route path="/readblog/:id" component={ReadBlog} />
          <Redirect from="*" to="/" />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}
export default App;
