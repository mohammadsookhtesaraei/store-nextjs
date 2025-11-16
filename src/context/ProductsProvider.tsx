"use client"

import { createContext, useContext, useEffect, useState } from "react"

export interface CartItemsT {
    id:number;
    qty:number;
};

type ShoppingCartContextType={
cartItems:CartItemsT[],
handleIncreaseProductQty:(id:number)=>void;
handleDecreaseProductQty:(id:number)=>void;
handleRemoveProducts:(id:number)=>void;
getProductQty:(id:number)=>number;
getAllProductQty:number;
};

const ShoppingCartContext=createContext({} as ShoppingCartContextType);

export function useProduct(){
    return useContext(ShoppingCartContext)
}


const ProductsProvider = ({children}:{
    children:React.ReactNode
}) => {
    const [cartItems,setCartItems]=useState<CartItemsT[]>([]);
 
     useEffect(()=>{
       const stored=localStorage.getItem('products');
       if(stored){
        setCartItems(JSON.parse(stored))
       }
     },[]);

     useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(cartItems))
     },[cartItems]);


   const handleIncreaseProductQty=(id:number)=>{
     setCartItems((prev)=>{

        let isNotProductExit=prev.find((item)=>item.id == id)==null;

        if(isNotProductExit){
            return [...prev,{id:id,qty:1}]
        }
        else {
            return prev.map((item)=>{
                if(item.id === id){
                    return {...item,qty:item.qty+1}
                }else {
                    return item
                }
            })
        }
     })
   };

   const handleDecreaseProductQty=(id:number)=>{
     setCartItems((prev)=>{
        let isLastOne=prev.find((item)=>item.id == id)?.qty == 1;
        if(isLastOne){
            return prev.filter((item)=>item.id !== id)
        }else {
            return prev.map((item)=>{
                if(item.id === id){
                    return {...item,qty:item.qty -1}
                }else {
                    return item
                }
            })
        }
     })
   };

  const getAllProductQty=cartItems.reduce((total,current)=>total + current.qty ,0);

  const getProductQty=(id:number)=>{
    return cartItems.find((item)=>item.id == id)?.qty || 0
  };

  const handleRemoveProducts=(id:number)=>{
    setCartItems((prev)=>{
        return prev.filter((i)=>i.id !== id)
    });
  }
  return (
    <ShoppingCartContext value={{cartItems,handleIncreaseProductQty,handleDecreaseProductQty,handleRemoveProducts,getProductQty,getAllProductQty}}>
        {children}
    </ShoppingCartContext>
  )
}

export default ProductsProvider