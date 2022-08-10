import React, { useEffect } from "react";
import { useState,useContext,useReducer } from "react";
import productData from "./Data/productsData";
import reducer from './reducer'
const AppContext = React.createContext();

const initialState= {
    loading: false,
    cart:productData,
    totalAmt:0,
    cartCount:0,
  }


const AppProvider=({children})=>{
const [products,setProducts] = useState(productData)
const [state, dispatch] = useReducer(reducer,initialState)// using useReducer hook   

const removeFromCart =(id)=>{
  dispatch({type:'REMOVE',payload:id})
} 
const clearCart = ()=>{
    dispatch({type:'CLEAR_CART'})
}
const addToCart =(id)=>{
 dispatch({type:'ADDTOCART',payload:id})
}
const displayCartItem =()=>{
  dispatch({type:'DISPLAY_CART_ITEM'})
}
   const increase=(id)=>{

    dispatch({type:'INCREASE',payload:id})
   }
   const decrease=(id)=>{
    dispatch({type:'DECREASE',payload:id})
   }
  
    const fetchData = ()=>{
      dispatch({type:'LOADING'})
      dispatch({type:'DISPLAY_ITEMS',payload:initialState.cart})
    }
    //useEffet 1
    useEffect(()=>{

       fetchData()
    },[])
    //useEffect 2
    useEffect(()=>{
      dispatch({type:'GET_TOTALS'}) 
    },[state.cart])
    return <AppContext.Provider 
        value={{
            ...state,
            clearCart,
            addToCart,
            displayCartItem,
            setProducts,
            removeFromCart,
            increase,
            decrease,
            products,
        }}
        >
            {children}
        </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
export {AppContext,AppProvider} 