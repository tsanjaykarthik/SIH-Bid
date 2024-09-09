import React from 'react';

function InfoCard({ content }) {
  return (
    <div className="overflow-hidden grow px-3 pt-8 pb-16 w-full text-3xl font-medium text-white rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] max-md:pr-5 max-md:mt-10">
      {content}
    </div>
  );
}

export default InfoCard;
