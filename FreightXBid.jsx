import React from 'react';

function FreightXHeader() {
  return (
    <header className="flex overflow-hidden flex-col px-14 pt-7 pb-14 bg-gray-700 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <h1 className="grow self-stretch my-auto text-5xl text-white max-md:text-4xl">
          FREIGHT X
        </h1>
        <div className="flex overflow-hidden gap-10 self-stretch px-8 py-4 my-auto text-2xl tracking-wide leading-none text-gray-200 whitespace-nowrap rounded-xl border-white border-solid shadow-sm bg-slate-200 bg-opacity-30 border-[3px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-9">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e213ac98aa616870c21b029f7fd32389c7bd3b0602f06967ae023b52c2b6533?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 aspect-square w-[25px]" />
            <label htmlFor="search" className="sr-only">Search</label>
            <input id="search" type="text" placeholder="search" className="bg-transparent border-none outline-none text-gray-200 placeholder-gray-200" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8c613dce2994fd77ca2f38a92c1bc87dc992aff31133d6f6c4e1464b00973b1?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 aspect-[0.72] w-[18px]" />
        </div>
        <nav className="flex gap-10 items-center self-stretch">
          <button className="flex overflow-hidden flex-col justify-center items-center self-stretch py-7 pr-3 pl-3.5 rounded-xl border-white border-solid shadow-sm bg-slate-400 border-[3px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3ec2426ede8ecacd6fdf8a5704b14c392733357efc9ed64fc04b4d00bc3de32?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Navigation icon" className="object-contain aspect-[1.67] w-[45px]" />
          </button>
          <button className="flex overflow-hidden gap-2.5 items-center self-stretch p-4 my-auto rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] h-[70px] w-[70px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8c329087622cee7dace03cf15c7ca1aab25599bd80f5cbfd0be216e95108ce?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Notification icon" className="object-contain self-stretch my-auto w-10 aspect-square" />
          </button>
          <button className="flex overflow-hidden gap-2.5 items-center self-stretch p-4 my-auto rounded-xl border-white border-solid shadow-sm bg-slate-200 bg-opacity-30 border-[3px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ccb78e84a800f0845013ea7874c6b61599bbf58a076ca6d7df71dfd1988f76e?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Settings icon" className="object-contain self-stretch my-auto w-9 aspect-[0.82]" />
          </button>
        </nav>
        <div className="flex gap-8 items-center self-stretch my-auto text-4xl text-white whitespace-nowrap">
          <div className="overflow-hidden self-stretch px-5 leading-tight rounded-full border-white border-solid shadow-sm bg-slate-400 border-[3px] h-[60px] w-[60px]">
            James.charAt(0)
          </div>
          <div className="self-stretch my-auto basis-auto">James</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d45e6e7a0a689fff47564dcdae3f9203fc7f8059c1ee1618d9a6726c20f2c29?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[41px]" />
        </div>
      </div>
    </header>
  );
}

function InfoCard({ content }) {
  return (
    <div className="overflow-hidden grow px-3 pt-8 pb-16 w-full text-3xl font-medium text-white rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] max-md:pr-5 max-md:mt-10">
      {content}
    </div>
  );
}

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

const bids = [
  { name: 'nawaz', amount: 500, date: '07/09/2024' },
  { name: 'Poggers', amount: 100, date: '08/09/2024' },
  { name: 'Aashutosh', amount: 500, date: '08/09/2024' },
];

function BidHistory() {
  const lowestBid = bids.reduce((min, bid) => bid.amount < min.amount ? bid : min, bids[0]);

  return (
    <section className="flex overflow-hidden flex-col px-20 pt-7 pb-28 mt-14 font-medium rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-6xl max-md:text-4xl">Lowest Bid</h2>
      <p className="self-center text-4xl">{lowestBid.name} - ${lowestBid.amount}</p>
      {bids.map((bid, index) => (
        <p key={index} className={`mt-2.5 mx-5 ${index === 0 ? 'mt-8' : ''} max-md:mr-2.5 max-md:max-w-full`}>
          {bid.name}: ${bid.amount} (Bid Date: {bid.date})
        </p>
      ))}
    </section>
  );
}

function FreightXDashboard() {
  const infoCardContents = [
    "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
    "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
    "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
    "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
    "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
    "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
  ];

  return (
    <div className="flex overflow-hidden flex-col px-14 pt-7 pb-14 bg-gray-700 max-md:px-5">
      <FreightXHeader />
      <main className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {infoCardContents.slice(0, 2).map((content, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <InfoCard content={content} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {infoCardContents.slice(2, 4).map((content, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <InfoCard content={content} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {infoCardContents.slice(4, 6).map((content, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <InfoCard content={content} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-3xl text-white max-md:mt-10 max-md:max-w-full">
              <BiddingForm />
              <BidHistory />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FreightXDashboard;

