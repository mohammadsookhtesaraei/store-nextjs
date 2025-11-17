"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Searchbox = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const searchHandler = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search.toLowerCase());
    router.push(`/store?${currentSearchParams.toString()}`);
  };

  return (
    <div>
      <input
        className="border rounded-md border-gray-200 text-gray-400 focus:outline-none py-1 ps-2"
        type="text"
        placeholder="جستوجو"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={searchHandler}
        className="px-8 ms-8 py-1 rounded-md cursor-pointer bg-blue-600 text-gray-200 hover:scale-105 active:scale-95 transition-transform duration-200 ease-out"
      >
        جستوجو
      </button>
    </div>
  );
};

export default Searchbox;
