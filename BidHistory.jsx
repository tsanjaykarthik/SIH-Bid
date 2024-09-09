import React from 'react';

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

export default BidHistory;
