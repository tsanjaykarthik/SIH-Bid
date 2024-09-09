import React from 'react';

function SearchBar() {
  return (
    <div className="flex overflow-hidden gap-10 self-stretch px-8 py-4 my-auto text-2xl tracking-wide leading-none text-gray-200 whitespace-nowrap rounded-xl border-white border-solid shadow-sm bg-slate-200 bg-opacity-30 border-[3px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-9">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e213ac98aa616870c21b029f7fd32389c7bd3b0602f06967ae023b52c2b6533?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 aspect-square w-[25px]" />
        <label htmlFor="search" className="sr-only">Search</label>
        <input id="search" type="text" placeholder="search" className="bg-transparent border-none outline-none text-gray-200 placeholder-gray-200" />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8c613dce2994fd77ca2f38a92c1bc87dc992aff31133d6f6c4e1464b00973b1?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 aspect-[0.72] w-[18px]" />
    </div>
  );
}

export default SearchBar;
