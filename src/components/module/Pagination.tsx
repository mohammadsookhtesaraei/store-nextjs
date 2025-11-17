"use client";

// use router
// برای تغییر یو ار ال در سمت کلاینت

// useSearchParams
// برای خوندن کویری استرینگ فعلی صفحه

import { useRouter, useSearchParams } from "next/navigation";

import ReactPaginate from "react-paginate";

const Pagination = ({ page }: { page: number }) => {
  const router = useRouter();

  // query params فعلی آدرس رو برمی‌گردونه
  const searchParams = useSearchParams();
  // مثلاً اگر URL این باشه
  // /store?title=apple&page=3
  // خروجی searchParams:

  // title=apple
  // page=3

  const handlePageClick = (e: { selected: number }) => {
    // چرا + یک
    // چون ReactPaginate صفحات رو از ۰ شروع می‌کنه
    // ولی ما می‌خوایم از ۱ شروع بشه مثل هر سایت معمولی.
    const page = e.selected + 1;

    // query params فعلی صفحه رو کپی می‌کنه.
    // چون searchParams فقط خواندنیه، باید تبدیلش کنیم به یک نسخه قابل ویرایش.
    const currentSearchParams = new URLSearchParams(searchParams.toString());

    // مقدار پیج اگه در کویری استرینگ وجود داشته باشه تغییر میده
    currentSearchParams.set("page", page.toString());
    // اینم ادرس رو کلا ابدیت می کنیم
    router.push(`/store?${currentSearchParams}`);
  };

  // توی سایت های فارسی باید کلاس کانتیر کامپونت فلکس رو ریورس داشته باشه چون برعکسه
  return (
    <div dir="rtl" className="p-2 flex justify-center mt-8">
      <ReactPaginate
        breakLabel="..."
        nextLabel="بعدی"
        previousLabel="قبلی"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={page}
        renderOnZeroPageCount={null}
        pageClassName="px-3 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100 transition"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-1 rounded-lg bg-gray-200 cursor-pointer hover:bg-blue-100"
        nextClassName="px-3 py-1 rounded-lg bg-gray-200 cursor-pointer hover:bg-blue-100"
        breakClassName="px-2 text-gray-400"
        disabledClassName="opacity-50 cursor-not-allowed"
        containerClassName="flex items-center gap-2 flex-row-reverse"
      />
    </div>
  );
};

export default Pagination;
