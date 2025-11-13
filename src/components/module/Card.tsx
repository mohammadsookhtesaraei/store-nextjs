import Image from "next/image"

import { ProductsT } from "@/types/type"
import Link from "next/link"

const Card = ({title,img,price,id}:ProductsT) => {
  return (
    <div className="w-86 border border-gray-200 p-4 flex flex-col items-start rounded bg-gray-100 transition-transform duration-200 ease-out shadow-md hover:scale-105">
        <Image className="p-6  w-[200px] h-[200px] block m-auto" src={img} width={200} height={200} alt={title} loading="lazy"/>
        <h2 className="text-right text-gray-500 text-base font-medium">نام محصول:<span className="text-base ms-1 text-gray-800 font-medium">{title}</span></h2>
        <h2 className="text-right text-gray-500 text-base font-medium">قیمت محصول:<span className="text-base ms-1 text-gray-800 font-medium">{price.toLocaleString("fa")} تومان</span></h2>
        <Link className="self-center text-orange-500 block my-1" href={`/store/${id}`}>
            مشاهده جزییات و سفارش محصول 
        </Link>
    </div>
  )
}

export default Card