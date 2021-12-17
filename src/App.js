import React, { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import About from "./components/about";
import Work from "./components/work";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Dashboard from "./components/user/dashboard";
import Write from "./components/user/write";
import ReadBlog from "./components/user/ReadBlog";
import Dev from "./components/contact";
import userStateContext from "./context/userContext.js";
import updateBlog from "./components/user/updateBlog";

function App() {
  const {user, setuser} = useContext(userStateContext)
  useEffect(() =>{
    const token = localStorage.getItem("auth-token");
    if(token){
      setuser(token)
    }
  }, [setuser])
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            {user ? (
              <>
                <Route path="/" exact component={Dashboard} />
                <Route path="/write" component={Write} />
                <Route path="/updateblog/:id" component={updateBlog} />
                <Route path="/about" component={About} />
                <Route path="/blogs" component={Work} />
                <Route path="/dev" component={Dev} />
                <Route path="/readblog/:id" component={ReadBlog} />
                <Redirect from="*" to="/" />
              </>
            ) : (
              <>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/about" component={About} />
                <Route path="/blogs" component={Work} />
                <Route path="/dev" component={Dev} />
                <Route path="/readblog/:id" component={ReadBlog} />
                <Redirect from="*" to="/" />
              </>
            )}
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}
export default App;
