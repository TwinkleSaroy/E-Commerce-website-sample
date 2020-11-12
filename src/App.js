import React ,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {Elements }from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
 
const promise = loadStripe
('pk_test_51HYoYWFcQTuAeGI55BYPcUjxUMWKqKn4pNwOZZCkeXKJpgeQv2KMLC0lE9Ag11O5vcXkqrIpCdKn4htlkugSSB3h00bn8YaCZF');

function App() {
 const [{basket}, dispatch] = useStateValue();
 
  useEffect(() => {
    // will only run once when the app component loads..
  
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })

      } else {
        // the user is logged out
        dispatch({
           type: 'SET_USER',
           user:null
        })
      }
    })
  },[])

  return (
  
    <Router>
    <div className="App">
      <Switch>
        <Route path ='/login'>
          <Login/>
        </Route>

        <Route path ='/checkout'>
          <Header/>
          <Checkout/>
          </Route>

        <Route path ='/payment'>
          <Header/>
          <Elements stripe = {promise} >

          <Payment/>
          </Elements>

         <h1>I am the payment route</h1>
         </Route>

         <Route path ='/'>
        <Header/>
          <Home/>
         </Route>
        </Switch>
      </div>
      </Router>
    
  );
}

 {/* we Need react-router*/}
      {/*localhost.com/ */}
      {/* localhost.com/checkout */}
      {/*localhost.com/login*/}


export default App;
