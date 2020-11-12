import React ,{useState}from 'react';
import  './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        
        auth .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert (error.message))

    }
    const register = e =>{
        e.preventDefault();
    
 auth 
     .createUserWithEmailAndPassword(email,password)
     .then((auth) =>{
         //it successfully created  a new user with email and password
         console.log(auth);
         if(auth){
             history.push('/')
         }
     })
     .catch(error => alert(error.message))
     //do some fancy firebase register shitt...
    }
    return (
        <div className='login'>
            <Link to ='/'>
            
            <img 
            className ='login_logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type ='password'value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn}
                    className='login_signInbutton'>Sign In</button>

                </form>
                <p>
                    By Signing-in you agree to the AMAZON FAKE CLONE 
                    conditions of use & sale.<br/> Please see our Privacy Notice, 
                    our Cookies Notice and our 
                    intrest based ads notice
                </p>
                <button onClick={register}
                 className ='login_registerButton'>Create your amazone account</button>
            </div>
                                                                   
        </div>
    )
}

export default Login;

