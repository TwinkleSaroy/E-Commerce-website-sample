import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className='checkout'>
        <div className ='checkout_left'>   

            <img className = 'checkout_ad'
            src='https://www.kindpng.com/picc/m/310-3105450_special-offer-banner-png-transparent-png.png'
            alt=''
            />
            
                <div>
    <h3>Hello,{user?.email}</h3>
                    <h2 className='checkout_title'>your Shopping Basket </h2>

                    {/*  list out all of the checkout products */}
                    
                    {basket?.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                    ))}
                </div>
            

        
            </div> 
            {basket.length > 0 && (
           <div className = 'checkout_right'>
               
               <Subtotal/>
               </div>
            )}
        </div>
    );
}

export default Checkout;
