import Container from "@/components/container/Container";
import Card from "@/components/module/Card";
import { ProductsT } from "@/types/type";
import { ProductList } from "@/app/store/page";
import Pagination from "@/components/module/Pagination";
import Searchbox from "@/components/module/Searchbox";

interface ProductsPageProps {
  products: ProductList;
  page:number
}

const ProductsPage = ({ products,page }: ProductsPageProps) => {
  return (
    <div>
      <Container>
      <Searchbox/>
        <div className="w-full rounded-md p-2.5 flex flex-wrap gap-y-1 items-center  justify-center sm:gap-x-1">
          {products.data.map((product: ProductsT) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
        <Pagination page={page}/>
      </Container>
    </div>
  );
};

export default ProductsPage;
