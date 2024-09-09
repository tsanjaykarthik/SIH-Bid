import React from 'react';

function UserProfile({ name }) {
  return (
    <div className="flex gap-8 items-center self-stretch my-auto text-4xl text-white whitespace-nowrap">
      <div className="overflow-hidden self-stretch px-5 leading-tight rounded-full border-white border-solid shadow-sm bg-slate-400 border-[3px] h-[60px] w-[60px]">
        {name.charAt(0)}
      </div>
      <div className="self-stretch my-auto basis-auto">{name}</div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d45e6e7a0a689fff47564dcdae3f9203fc7f8059c1ee1618d9a6726c20f2c29?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[41px]" />
    </div>
  );
}

export default UserProfile;
