import HomePage from "@/components/templates/HomePage";

import { ProductsT } from "@/types/type";

const Store = async () => {
  const res = await fetch("http://localhost:3004/products", {
    cache: "no-store",
  });
  const data = (await res.json()) as ProductsT[];
  const products = data.slice(0, 4);

  return <HomePage products={products} />;
};

export default Store;
