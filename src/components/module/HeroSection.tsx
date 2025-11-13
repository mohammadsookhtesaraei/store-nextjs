"use client";

const HeroSection = () => {
  return (
    <div className="bg-gray-300 w-full mx-auto flex items-start flex-wrap gap-y-4 lg:gap-x-4 p-2.5 border border-gray-200 m-16 rounded-md lg:h-[500px] mb-8">
      <div className="grid content-start gap-8 h-full bg-gray-100 p-20 w-full lg:w-[calc(50%-0.5rem)] rounded-md">
        <h1 className="text-2xl font-semibold text-gray-500">
          به فروشگاه خوش آمدید
        </h1>
        <p className="text-gray-500 font-medium">
          فروش اقساطی لوازم دیجیتال موبایل،لب تاب....
        </p>
        <button className="bg-orange-500 px-4 py-1.5 rounded-md text-gray-200 justify-self-start cursor-pointer">
          مشاهده محصولات
        </button>
      </div>

      <div className="bg-gray-200 grid gap-1 grid-cols-3 w-full lg:w-[calc(50%-0.5rem)] h-[500px] lg:h-full p-4 rounded-md ">
        <div className="bg-red-700 col-span-2 rounded-md text-center place-content-center text-white">
          اول
        </div>
        <div className="bg-blue-700 col-span-1 rounded-md text-center place-content-center text-white">
          دوم
        </div>
        <div className="bg-slate-700 col-span-3 rounded-md text-center place-content-center text-white">
          سوم
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
