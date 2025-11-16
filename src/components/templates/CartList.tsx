

import { useEffect, useState } from "react"
import { ProductsT } from "@/types/type"
import { CartItemsT } from "@/context/ProductsProvider"
import AddedToCartBtn from "@/components/module/AddedToCartBtn"


const CartList = ({id,qty}:CartItemsT) => {
  const [data,setData]=useState({}as ProductsT);
  useEffect(()=>{
   const getData=async()=>{
   try{
    const res=await fetch(`http://localhost:3004/products/${id}`);
    const json=await res.json();
    setData(json);  
   }catch(error){
    console.log(error);
   } 
   };
   getData();
  },[])
  return (
    <div className="w-6/12 border flex border-gray-200 rounded-md p-2 mb-2">
        <div className="flex-1 grid gap-8">
             <h2>نام محصول: {data.title}</h2>
            <p>قیمت:{data.price?.toLocaleString("fa")}تومان</p>
            <p>تعداد سفارش: {qty}</p>
            <AddedToCartBtn id={id.toString()}/>
        </div>
       
        <img className="w-4/12" src={data.img} alt="" />
    </div>
  )
}

export default CartList