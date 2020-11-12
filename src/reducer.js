export const initialState = {
    basket: [{
        id:'3245456',
        title: 'New Apple iPad pro (12,9-inch, wi-fi,12gb)-Silver(4th generation)',
        price: 500.44,
        rating:3,
        image:'https://image.freepik.com/vettori-gratuito/iphone-11-pro-isolato-vettore-di-alta-qualita_126183-14.jpg',
        
    },
    {
        id:'3245456',
        title: 'New Apple iPad pro (12,9-inch, wi-fi,12gb)-Silver(4th generation)',
        price: 500.44,
        rating:3,
        image:'https://image.freepik.com/vettori-gratuito/iphone-11-pro-isolato-vettore-di-alta-qualita_126183-14.jpg',
        
    }],
    user:null,
};
export const getbasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0);
const reducer = (state , action) => {
    console.log(action);
    switch(action.type) {
        case 'add_to_basket':
            //Logic for adding item to basket
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
            case 'REMOVE_FROM_BASKET':
            //Logic for remove item from basket
            
            // cloned the basket
            let newbasket = [...state.basket];

            // check to see if product exists,
            const index = state.basket.findIndex(
            (basketItem) => basketItem.id ===action.id)

            if (index >= 0)  
            {
                //item exists in basket, remove it.
                newbasket.splice(index,1);
            }
            else{
            console.warn(
                `cant remove product ( id: ${action.id}) as item`
            )
            }

            return{...state , 
                basket: newbasket,
            };

            case'SET_USER':
            return {
                ...state,
                user: action.user
            }

            default:
                return state;
    }
};
export default reducer;
/*
 
*/