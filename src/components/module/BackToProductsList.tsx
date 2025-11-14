"use client"

import { useRouter } from "next/navigation"

const BackToProductsList = () => {
    const router=useRouter();

    const backHandler=()=>{
        router.push("/store")
    }
  return (
    <button className="bg-orange-500 text-white rounded-md px-8 py-1 mb-2 cursor-pointer" onClick={backHandler}>بازگشت به لیست محصولات</button>
  )
}

export default BackToProductsList