"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "خانه", href: "/" },
  { name: "محصولات", href: "/store" },
  { name: "درباره ما", href: "/about" },
];

const Header = () => {
  const pathName = usePathname();
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className="relative">
      <nav className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ">
        <div className="flex items-center border-b border-b-gray-200 h-16 mb-8">
          {/* hamburger */}
          <button onClick={()=>setIsOpen((prev)=>!prev)} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* sidebar */}
          <div className={isOpen ? "lg:hidden rounded-bl-md pb-2 bg-gray-200 w-60 transition-all duration-200 absolute top-0 right-0 border border-gray-200":"absolute top-0 -right-full"}>
          <div className="text-left p-2">
             <button onClick={()=>setIsOpen((prev)=>!prev)}>
            <span className="text-lg text-gray-700 hover:text-gray-800">x</span>
           </button>
           
          </div>
            <div className="block lg:hidden">
            <ul className="ms-4 mb-2.5 flex flex-col gap-y-2.5">
              {links.map((link) => {
                const isActive =
                  pathName === link.href ||
                  (pathName.startsWith(link.href) && link.href !== "/");
                return (
                  <li key={link.name}>
                    <Link
                      className={isActive ? "text-gray-800 text-sm font-medium" : "text-gray-500 text-sm font-medium"}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="bg-gray-600 mb-2.5" />
            <div className="ms-4 flex flex-col lg:hidden">
            <Link className="text-sm  font-medium text-gray-700 hover:text-gray-800" href={"/login"}>
            ورود
            </Link>
           
            <Link className="text-sm font-medium text-gray-700  hover:text-gray-800" href={"/register"}>
            ثبت نام
            </Link>
          </div>
          </div>











          {/* main */}
          <div className="hidden lg:block">
            <ul className="ms-4 flex gap-x-8">
              {links.map((link) => {
                const isActive =
                  pathName === link.href ||
                  (pathName.startsWith(link.href) && link.href !== "/");
                return (
                  <li key={link.name}>
                    <Link
                      className={isActive ? "text-gray-800 text-sm font-medium" : "text-gray-500 text-sm font-medium"}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* account and basket */}
          <div className=" flex items-center gap-x-4 lg:gap-x-6 ms-auto">
          <div className="hidden lg:flex lg:items-center gap-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-gray-800" href={"/login"}>
            ورود
            </Link>
            <span className="w-px h-6 bg-gray-200"></span>
            <Link className="text-sm font-medium text-gray-700 hover:text-gray-800" href={"/register"}>
            ثبت نام
            </Link>
          </div>
           <div>
             <Link className="flex items-center p-2 group" href={"/cart"}>
               <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-400 group-hover:text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
                 <span className="text-sm ms-2 font-medium text-gray-700 group-hover:text-gray-800">0</span>
             </Link>
          
           </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
