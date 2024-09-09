import React from 'react';
import FreightXHeader from './FreightXHeader';
import InfoCard from './InfoCard';
import BiddingForm from './BiddingForm';
import BidHistory from './BidHistory';

const infoCardContents = [
  "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
  "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
  "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
  "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
  "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
  "Lorem ipsum dolor sit amet consectetur. Mauris magna fusce mi ut eget felis nunc posuere nulla.",
];

function FreightXDashboard() {
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
