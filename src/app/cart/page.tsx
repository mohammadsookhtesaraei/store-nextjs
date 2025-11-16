"use client"
import { useProduct } from "@/context/ProductsProvider"
import Container from "@/components/container/Container"
import CartList from "@/components/templates/CartList"


const Cart = () => {
 const {cartItems}=useProduct()
  return (
    <div>
        <Container>
            <div>
              <h2 className="bg-blue-700 w-6/12 py-1 flex items-center ps-2 text-gray-200 rounded-md mb-8">سبد خرید شما</h2>
              <div>
               {cartItems.map((item)=>(
                <CartList key={item.id} {...item}/>
               ))} 
              </div>
              <div>
                تخفیفات
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Cart