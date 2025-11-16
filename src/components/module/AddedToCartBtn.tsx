"use client"

import { useProduct } from "@/context/ProductsProvider"

const AddedToCartBtn = ({id}:{
    id:string
}) => {

    const {handleIncreaseProductQty,handleDecreaseProductQty,getProductQty}=useProduct()
   

  return (
    <div className="flex items-center gap-x-5">
        <button className="bg-blue-700 text-white px-8 py-1 rounded-md cursor-pointer" onClick={()=>handleDecreaseProductQty(parseInt(id))}>-</button>
         <span className="w-8 text-center">{getProductQty(parseInt(id))}</span>
        <button className="bg-blue-700 text-white px-8 py-1 rounded-md cursor-pointer"  onClick={()=>handleIncreaseProductQty(parseInt(id))}>+</button>
    </div>
  )
}

export default AddedToCartBtn