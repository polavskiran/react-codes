import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Body/Home';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import LoginForm from './Components/LoginForm';
import HomeUser from './Components/Body/HomeUser';
import RegisterForm from './Components/RegisterForm';
import Java from './Components/Pages/Java';
import Python from './Components/Pages/Python';
import Groovy from './Components/Pages/Groovy';

function App() {

  
  // const Logout =() =>{
  //   setUser({name: "" , email: ""});
  // }



  return (
    <div className="page-container">
    {/* <Header/> */}
    <div className="content-wrap" >
      <Router>
          <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/signup" exact component={RegisterForm}/>
                <Route path="/login" exact component={LoginForm} />
                <Route path="/homeuser" exact component={HomeUser} />
                <Route path="/Java" exact component={Java} />
                <Route path="/Groovy" exact component={Groovy} />
                <Route path="/Python" exact component={Python}/>

                {/* <Route path="/login" exact component={LoginForm} render = {(props) => Login ={Login}}/> */}
                {/* <Route path="/login" exact component={LoginForm} render = {(props) => <LoginForm Login={Login} error ={error}/>}/> */}
                {/* <LoginForm Login={Login} error ={error}/> */}
                {/* {(user.email !="") ? (
        <div className="welcome">
          <h2> Welcome, <span> {user.name} </span></h2>
          <button onClick={Logout}>  Logout </button>
          </div>
      ) : (
            <LoginForm Login={Login} error ={error}/>
      )} */}
                
          </Switch>
      </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
