 


import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <>
        <div className="containerInfo flex flex-col md:flex-row justify-around items-center py-10 space-y-6 md:space-y-0 md:space-x-4 bg-[#F5EDED] ">
          {/* box1 */}
          <div className="box0 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl font-bold text-[1.25rem] font-inter ">Quality Gurantee</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p className='font-inter font-[400] text-[1.1rem]'>We handpick the best products to ensure you get top quality every time.</p>
            </div>
          </div>

          {/* box2 */}
          <div className="box1 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl font-bold text-[1.25rem] font-inter ">Daily Offers</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p className='font-inter font-[400] text-[1.1rem]'>Enjoy amazing deals on your favorite items every day.</p>
            </div>
          </div>

          {/* box3 */}
          <div className="box1 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl font-bold text-[1.25rem] font-inter ">Secure Payment</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p className='font-inter font-[400] text-[1.1rem]' >Shop with confidence, knowing your transactions are safe and secure.</p>
            </div>
          </div>

          {/* box4 */}
          <div className="box1 flex flex-col items-center w-full md:w-fit text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-xl md:text-2xl font-bold text-[1.25rem] font-inter ">Service</h2>
            </div>
            <div className="para text-sm md:text-[0.9rem] mt-2 text-center w-[80%] md:w-[40%]">
              <p className='font-inter font-[400] text-[1.1rem]' >We're here to help with a smile every step of the way.</p>
            </div>
          </div>
        </div>

        <div className="emptyContainer h-[6rem] bg-[#6482AD]"></div>
      </>
    );
  }
}
