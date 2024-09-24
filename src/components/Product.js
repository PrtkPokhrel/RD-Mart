 

import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <>
        <div className="containerH2 flex justify-center mt-6">
          <h2 className="text-[#6482AD] font-bold text-3xl md:text-4xl">Our Products</h2>
        </div>

        {/* Actual Product section starts from here */}
        <div className="container bg-[#E2DAD6] p-6 md:p-11 rounded-2xl">
          {/*Top part of the container */}
          <div className="top flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="left bg-[#F5EDED] border-black flex flex-col w-full md:w-[40%] rounded-2xl">
              <h3 className="groceryh3 text-3xl md:text-4xl text-center text-[#6482AD] font-semibold">Grocery</h3>
              <div className="imgContainer flex justify-center md:justify-end mt-3">
                <img className="w-[80%] md:w-[70%]" src={this.props.grocery} alt="RD Mart Grocery Section" />
              </div>
            </div>

            <div className="right bg-[#F5EDED] border-black flex flex-col md:flex-row justify-between w-full md:w-[58%] rounded-2xl">
              <div className="imgContainer2 flex flex-col items-center justify-center md:justify-around m-auto">
                <h3 className="text-3xl md:text-4xl text-[#6482AD] font-semibold">Cosmetics</h3>
              </div>
              <img className="w-[80%] md:w-[50%] mt-3 mx-auto" src={this.props.cosmetics} alt="RD Mart Cosmetics Section" />
            </div>
          </div>

          {/* Bottom part of the container */}
          <div className="bottom mt-4 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            {/* Bottom left */}
            <div className="left bg-[#F5EDED] border-black flex flex-col justify-end w-full md:w-[58%] rounded-2xl">
              <div className="imgContainer2 flex flex-col items-center justify-end">
                <h3 className="text-3xl md:text-4xl text-[#6482AD] font-semibold pb-4 md:pb-8">Beverage</h3>
                <img className="w-[90%] md:w-[90%]" src={this.props.beverage} alt="RD Mart Beverage Section" />
              </div>
            </div>

            {/* Bottom right */}
            <div className="right bg-[#F5EDED] flex flex-col w-full md:w-[40%] rounded-2xl">
              <h3 className="groceryh3 text-3xl md:text-4xl mt-3 ml-3 text-[#6482AD] font-semibold">Cleaning</h3>
              <div className="imgContainer flex justify-center md:justify-end mt-3">
                <img className="w-[80%] md:w-[70%]" src={this.props.cleaning} alt="RD Mart Cleaning Section" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
