import React from 'react';

function BiddingForm() {
  return (
    <form className="flex overflow-hidden flex-col px-8 pt-4 pb-20 w-full rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
        <h2 className="font-medium">Start Bidding Your price for</h2>
        <span className="font-black">...</span>
      </div>
      <div className="flex gap-1.5 self-start mt-8 font-medium">
        <label htmlFor="companyName">Company Name:</label>
        <input id="companyName" type="text" value="Aashutosh" readOnly className="bg-transparent border-none" />
      </div>
      <div className="flex gap-4 self-start mt-6 font-medium">
        <label htmlFor="bidAmount" className="grow my-auto">Bid Amount:</label>
        <input id="bidAmount" type="number" className="flex shrink-0 max-w-full rounded-2xl border-white border-solid shadow-sm border-[3px] h-[50px] w-[274px]" />
      </div>
      <button type="submit" className="overflow-hidden self-center px-10 py-4 mt-14 max-w-full text-2xl leading-tight rounded-full border-white border-solid shadow-sm bg-slate-400 border-[3px] w-[193px] max-md:px-5 max-md:mt-10">
        Submit Bid
      </button>
    </form>
  );
}

export default BiddingForm;
