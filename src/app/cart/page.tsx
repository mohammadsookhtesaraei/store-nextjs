"use client";
import { useEffect, useState } from "react";
import { useProduct } from "@/context/ProductsProvider";

import Container from "@/components/container/Container";
import CartList from "@/components/templates/CartList";

import { ProductsT } from "@/types/type";

interface discountT {
  id: string;
  code: string;
  precentage: number;
}

const Cart = () => {
  const { cartItems } = useProduct();
  const [data, setData] = useState<ProductsT[]>([]);
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:3004/products");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    let isSelected = data.find((product) => product.id == item.id);
    return total + (isSelected?.price || 0) * item.qty;
  }, 0);

  const submitHandler = async () => {
    if(!discount){
      return
    };
    const result = await fetch(
      `http://localhost:3004/discounts?code=${discount}`
    );
    const json = (await result.json()) as discountT[];
    let discountPercentage = json[0].precentage;
    let discountPrice = (totalPrice * discountPercentage) / 100;
    setDiscountPrice(discountPrice);
    let finalPrice = totalPrice - discountPrice;
    setFinalPrice(finalPrice);
    setDiscount("");
  };

  return (
    <div>
      <Container>
        <div>
          <h2 className="bg-blue-700 w-6/12 py-1 flex items-center ps-2 text-gray-200 rounded-md mb-8">
            سبد خرید شما
          </h2>
          <div className="w-6/12 bg-orange-600 py-2 px-2 mb-8 rounded-md flex items-center justify-between">
            <p className="text-white">ده درصد تخفیف با وارد کردن کد تخفیف</p>
            <p className="text-white">OFF10</p>
          </div>
          <div>
            {!cartItems.length ? (
              <p className="text-red-500 mb-8 ps-2 bg-red-200 w-6/12 rounded-md py-2">
                {" "}
                سفارشی ثبت نشده است
              </p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartList key={item.id} {...item} />
                ))}
              </>
            )}
          </div>
          <div className="w-6/12 border border-gray-200 shadow-md p-2">
            <h2>قیمت کل:{totalPrice.toLocaleString("fa")}تومان</h2>
            <p>
              میزان تخفیف اعمال شده : {discountPrice.toLocaleString("fa")}تومان
            </p>
            <p>قیمت نهایی:{finalPrice.toLocaleString("fa")}تومان</p>
            <div>
              <input
                className="border px-2 py-1 rounded-md border-gray-200 focus:outline-none"
                type="text"
                value={discount}
                placeholder="کد تخفیف را وارد کنید"
                onChange={(e) => setDiscount(e.target.value)}
              />
              <button
                className="px-8 py-1 rounded-md border border-gray-200 ms-2.5 text-gray-300 hover:text-gray-400 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ease-out"
                onClick={submitHandler}
              >
                اعمال
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
