import ProductsPage from "@/components/templates/ProductsPage"
import { ProductsT } from "@/types/type";

const Store = async() => {
   const res = await fetch("http://localhost:3004/products", {
     cache: "no-store",
   });
   const data = (await res.json()) as ProductsT[];
   return (
   <ProductsPage products={data}/>
  )
}

export default Store