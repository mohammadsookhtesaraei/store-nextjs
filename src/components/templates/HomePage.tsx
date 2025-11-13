import Container from "@/components/container/Container"
import HeroSection from "@/components/module/HeroSection"
import LogoList from "@/components/module/LogoList";
import ProductList from "@/components/module/ProductList";

import { ProductsT } from "@/types/type"

interface HomePageProps {
products:ProductsT[];
}



const HomePage = ({products}:HomePageProps) => {
  return (
    <div>
        <Container>
           <HeroSection/>
           <ProductList data={products}/>
           <LogoList/>
        </Container>
    </div>
  )
}

export default HomePage