import Image from "next/image";
import { ProductsT } from "@/types/type";

import Container from "@/components/container/Container";
import BackToProductsList from "@/components/module/BackToProductsList";

interface ProductsItemT {
    params:Promise<{storeId:string}>
}

const ProductsItem = async({params}:ProductsItemT) => {
    const {storeId}=await params;
    const res=await fetch(`http://localhost:3004/products/${storeId}`,{cache:"no-store"});
    const data=await res.json() as ProductsT;
  return (
    <div>
        <Container>
            <div className="">
                <BackToProductsList/>
             <div className="flex flex-row-reverse border border-gray-200 rounded-md p-2 shadow-md">
                <Image src={data.img} width={200} height={200} alt={data.title} loading="lazy"/>
                <div className=" flex-1 p-4">
                    <h2>نام محصول:{data.title}</h2>
                    <p>قیمت محصول:{data.price.toLocaleString("fa")}تومان</p>
                </div>
             </div>
             
            </div>
        </Container>
    </div>
  )
}

export default ProductsItem