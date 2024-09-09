import React from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import IconButton from './IconButton';

function FreightXHeader() {
  return (
    <header className="flex overflow-hidden flex-col px-14 pt-7 pb-14 bg-gray-700 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <h1 className="grow self-stretch my-auto text-5xl text-white max-md:text-4xl">
          FREIGHT X
        </h1>
        <SearchBar />
        <nav className="flex gap-10 items-center self-stretch">
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3ec2426ede8ecacd6fdf8a5704b14c392733357efc9ed64fc04b4d00bc3de32?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8"
            alt="Navigation icon"
            className="flex overflow-hidden flex-col justify-center items-center self-stretch py-7 pr-3 pl-3.5 rounded-xl border-white border-solid shadow-sm bg-slate-400 border-[3px]"
            imgClassName="object-contain aspect-[1.67] w-[45px]"
          />
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8c329087622cee7dace03cf15c7ca1aab25599bd80f5cbfd0be216e95108ce?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8"
            alt="Notification icon"
            className="flex overflow-hidden gap-2.5 items-center self-stretch p-4 my-auto rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] h-[70px] w-[70px]"
            imgClassName="object-contain self-stretch my-auto w-10 aspect-square"
          />
          <IconButton
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ccb78e84a800f0845013ea7874c6b61599bbf58a076ca6d7df71dfd1988f76e?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8"
            alt="Settings icon"
            className="flex overflow-hidden gap-2.5 items-center self-stretch p-4 my-auto rounded-xl border-white border-solid shadow-sm bg-slate-200 bg-opacity-30 border-[3px]"
            imgClassName="object-contain self-stretch my-auto w-9 aspect-[0.82]"
          />
        </nav>
        <UserProfile name="James" />
      </div>
    </header>
  );
}

export default FreightXHeader;
