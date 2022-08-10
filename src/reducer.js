const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

   //Remove
   if (action.type === 'REMOVE') {
        return{
            ...state,
            cartVal:state.cart.filter((item)=>item.id!==action.payload)
        }

    }
    
    if(action.type==='INCREASE'){
        let tempCart = state.cart.map((cartItem) => {       
            if (cartItem.id === action.payload) {
             return {...cartItem,cartCount:cartItem.cartCount+1}
            }
         
            return cartItem
        })
      
        return { ...state,cart:tempCart}
    }
    if(action.type==='DECREASE'){
        let tempCart = state.cart.map((cartItem) => {       
            if (cartItem.id === action.payload) {
             return {...cartItem, cartCount:cartItem.cartCount-1}
            }
         
            return cartItem
        }).filter((cartItem=> cartItem.cartCount !==0))
      
        return { ...state,cart:tempCart}
    }

    if(action.type==='LOADING'){
        return{...state,loading:true}
    }
    

    if (action.type === 'ADDTOCART') {
        let tempCart = state.cart.map((cartItem) => {       
            if (cartItem.id === action.payload) {
             return {...cartItem, cartCount:cartItem.cartCount+1}
            }
         
            return cartItem
        })
      
        return { ...state,cart:tempCart}
    }
    if(action.type==='DISPLAY_CART_ITEM'){
        let singleItemTotal=0;
        let tempCart = state.cart.map((cartItem) => {
                if(cartItem.cartCount > 0){
                    singleItemTotal = cartItem.cartCount * cartItem.price
                      return{...cartItem,itemTotal: singleItemTotal}
                }
            }).filter(notUndefined => notUndefined !== undefined);  
        
        return{...state,cart:tempCart}
    }
    if(action.type==='DISPLAY_ITEMS'){
       
        return{...state,cart:action.payload,loading:false}
    }
     if(action.type==='GET_TOTALS'){
       
        let{totalAmt,cartCount}= state.cart.reduce( // reduce javascript function
            (cartTotal,cartItem) => {
                const{price,cartCount} = cartItem
                const itemTotals = price * cartCount
                
                cartTotal.totalAmt += itemTotals
                cartTotal.cartCount+=cartCount
                //console.log(cartTotal)
                return cartTotal  // always return first parameter in reduce, in this case cartTotal
            },{
                totalAmt:0,
                cartCount: 0,
                
            }
        )
        
        //console.log(totalAmt)
        totalAmt=parseFloat(totalAmt.toFixed(2))
        return{...state,totalAmt,cartCount}
    }
return state
}
export default reducer

// Defination of reduce 
// it helps to reduce result into single value