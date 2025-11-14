import Container from "@/components/container/Container"
import Link from "next/link"


const Footer = () => {
  return (
    <footer>
       <Container>
        <div className="bg-slate-800 p-24 my-8 rounded flex flex-wrap gap-y-4">
          <div className="w-full sm:w-6/12">
            <ul className="grid gap-8 text-white list-disc">
              <li className="list-disc">
                <Link href={"/"}>
                خانه
                </Link>
              </li>
              <li className="list-disc">
                <Link href={"/store"}>
                محصولات
                </Link>
              </li>
              <li className="list-disc" >
                <Link href={"/about"}>
                درباره ما
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-6/12 text-white ">
           <p>به فروشگاه ما خوش ا مدید تمام محصولات ما دارای  گارانتی معتبر است</p>
           <p>ادرس : تهران  میدان آزادی کوچه اول سمت راست</p>
          </div>
        </div>
       </Container>
    </footer>
  )
}

export default Footer