 


import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <>
        <div className="containerInfo flex flex-col md:flex-row justify-around items-center my-10 space-y-6 md:space-y-0 md:space-x-4">
          {/* box1 */}
          <div className="box0 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl">Quality Gurantee</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p>We handpick the best products to ensure you get top quality every time.</p>
            </div>
          </div>

          {/* box2 */}
          <div className="box1 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl">Daily Offers</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p>Enjoy amazing deals on your favorite items every day.</p>
            </div>
          </div>

          {/* box3 */}
          <div className="box1 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl">Secure Payment</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p>Shop with confidence, knowing your transactions are safe and secure.</p>
            </div>
          </div>

          {/* box4 */}
          <div className="box1 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl">Customer Service</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p>We're here to help with a smile every step of the way.</p>
            </div>
          </div>
        </div>

        <div className="emptyContainer h-[6rem] bg-[#6482AD]"></div>
      </>
    );
  }
}
