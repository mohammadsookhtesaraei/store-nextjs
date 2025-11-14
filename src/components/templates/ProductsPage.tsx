import Container from "@/components/container/Container";
import Card from "@/components/module/Card";
import { ProductsT } from "@/types/type";

interface ProductsPageProps {
  products: ProductsT[];
}

const ProductsPage = ({ products }: ProductsPageProps) => {
  return (
    <div>
      <Container>
        <div className="w-full rounded-md p-2.5 flex flex-wrap gap-y-1 items-center  justify-center sm:gap-x-1">
          {products.map((product: ProductsT) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
