import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';



function Header() {
  const [{basket,user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
     auth.signOut();
    }
  }
  console.log(basket);

    return (
    <div className='header'>
      <Link to ='/' className='link'>

    {/* logo on the left-> img */ }
    <img 
       className ='header_logo'
       src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
       alt=''
       />
       </Link>
    {/* Search box */ }
    <div className ='header_serach'>
<input types ='text' className='header_searchinput'/>
<SearchIcon className='header_searchIcon'/>
</div>

     {/* 3 Links */}
  <div className ='header_nav'>

      {/* 1st link */}
      <Link  to ={!user && '/login'}  className='header_link' >
     <div onClick={handleAuthentication} className ='header_option'> 
     {/*email id or twinkle */}  
      <span className='header_optionLineOne'>Hello  {!user ? 'twinkle' : user.email}  </span>
    <span className='header_optionLineTwo'>{user ?  'Sign Out' : 'Sign In'}</span>
      </div>
      </Link>

      {/* 2nd link */}
      <Link  to ='/order' className='header_link'>
      <div className ='header_option' >   
      <span className='header_optionLineOne'>Return</span>
      <span className='header_optionLineTwo'> & Orders</span>
     
      </div>
      </Link>


      {/* 3rd link */}
      <Link  to ='/order' className='header_link'>
      <div className ='header_option'>   
      <span className='header_optionLineOne'>Your</span>
      <span className='header_optionLineTwo'>Prime </span>
      </div>
      </Link>


      {/* 4th link */}
      <Link  to ='/checkout'  className='header_link'>
      <div className ='header_optionBasket'>   
     {/*Shopping basket icon */}
     <ShoppingBasketIcon/>
     {/* Number of items in the basket */}
    <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
      </div>
      </Link>



  </div>
    {/* basic icon with number */ }
    </div>    
    );        
};

export default Header ; 
