import React,{useState, useEffect} from 'react';
import CheckoutProduct from './CheckoutProduct';
import{useStateValue} from './StateProvider';
import {Link,useHistory } from 'react-router-dom';
import  './Payment.css';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getbasketTotal } from './reducer';
import axios from './axios';



function Payment() {

    const [{basket, user},dispatch]=useStateValue();
    const history = useHistory();
    
    const stripe = useStripe();
    const elements = useElements();
    
    const[succeeded,setSucceed] = useState(false);
    const[processing,setProcessing] = useState('');
    const [error, setError] = useState(null);
    const[disabled,setDisabled] = useState(true);
    const[clientSecret,setClientSecret] = useState(true);

   useEffect(() => {
       //genrate the special stripe secret which allows us to charge a customer
    
      const getClientSecret = async () => {
          const response = await axios({
              method: 'post',
              //Stripe expects the total in a currencies submits
              url:`/payment/create?total=${getbasketTotal(basket)*100}`
          });
       
          setClientSecret(response.data.clientSecret)
      } 
      getClientSecret();
   },[basket])

   console.log('THE SECRET IS >>>',clientSecret);

    
    const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    //const payload = await stripe
    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) =>{
        //paymentIntent = payment confirmation
        setSucceed(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders')
    });
    };

    const handleChange = event =>{
        //Listen for changes in the CardElement
        //and display my errors as the customer types thier card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : '');
    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout(
                    <Link to ='/checkout'>{basket?.length} items</Link>
                   )
                </h1>



            {/* payment section- delivery address*/}
            <div className='payment_section'>
             <div className='payment_title'>
                 <h3>Delivery Address</h3> 
                 </div>
                 <div className='payment_address'>
            <p>{user?.email}</p>
            <p>New Delhi 11002</p>
            <p>Cannought Place Line No 103</p>             
             </div>
            </div>

            {/* payment section- Review times*/}
            <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review items and Delivery</h3>
            </div>
            <div className='payment_items'>
                {basket.map(item => (
                    <CheckoutProduct
                    id ={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                 
                   />
                ))}
            </div> 
            </div>
            {/* payment section- Payment method*/}
            <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment Method</h3>

            </div>
            <div className='payment_details'>
                {/*stripe magic will go */}

                <form onSubmit ={handleSubmit}>
                    <CardElement onChange ={handleChange}/>

                    <div className='payment_priceContainer'>
                        <CurrencyFormat
                        renderText ={(value) => (
                        <h3>Order Total:{value}</h3>)}
                                 
                                decimalScale ={2}
                                value ={getbasketTotal(basket)}
                                displayType ={'Text'}
                                thousandSeparator ={true}
                                prefix={'5'}
                                />
                                <button disabled ={processing || disabled || succeeded}>
                        <span>{processing ?<p>Processing</p>:'Buy Now '}</span>
                                </button>
                    </div>
                    {/*Errors*/}
                        {error && <div>{error}</div>}
                </form>
                
            </div>
            </div>  
        </div>
        </div>
    );
};

export default Payment ; 
