import ProductsPage from "@/components/templates/ProductsPage"
import { ProductsT } from "@/types/type";

export interface ProductList {
  first:number | null;
  items:number | null;
  last :number | null;
  next:number | null;
  pages:number;
  prev :number | null;
  data:ProductsT[]
};

const Store = async({searchParams}:{
 searchParams:Promise<{page:string,title:string}>
}) => {

  const page=(await searchParams).page ?? "1";
  const title=(await searchParams).title ?? "";

   const res = await fetch(`http://localhost:3004/products?_page=${page}&_per_page=5&title=${title}`, {
     cache: "no-store",
   });
   const data = (await res.json()) as ProductList;
   return (
   <ProductsPage products={data} page={data.pages}/>
  )
}

export default Store