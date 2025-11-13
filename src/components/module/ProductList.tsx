import Card from "@/components/module/Card";

import { ProductsT } from "@/types/type";

interface ProductListProps {
  data: ProductsT[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="w-full mx-auto bg-gray-300 p-4 rounded-md">
      <h2 className="text-center font-semibold text-2xl text-gray-600 mb-1.5">
        مشاهده محصولات
      </h2>
      <div className="w-full rounded-md p-2.5 flex flex-wrap gap-y-1 items-center lg:flex-nowrap justify-center sm:gap-x-1">
        {data.map((product: ProductsT) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
