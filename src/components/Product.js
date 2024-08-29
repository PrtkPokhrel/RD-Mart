import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (

      <>
        <div className="containerH2 flex justify-center mt-6 ">

          <h2 className='text-[#6482AD] font-bold text-4xl '>Our Products</h2>
        </div>
          {/* Actual Product section starts from here */}



        <div className="container bg-[#E2DAD6]  p-11  rounded-2xl   ">


          {/*Top part of the container  */}
          <div className="top flex justify-between">

            <div className="left bg-[#F5EDED] border-black flex flex-col w-[40%] rounded-2xl">
              <h3 className='groceryh3 text-4xl text-center  text-[#6482AD] font-semibold  ' >Grocery</h3>
              <div className="imgContainer flex justify-end">

                <img className='w-[70%]   right-2 mt-3 ' src={this.props.grocery} alt="RD Mart Grocery Section" />
              </div>
            </div>


            <div className="right bg-[#F5EDED] border-black flex justify-between  w-[58%] rounded-2xl">
              <div className="imgContainer2 flex justify-around items-center m-[auto]">
                <h3 className='  text-4xl  text-[#6482AD] font-semibold ' >Cosmetics</h3>

              </div>
                <img className='w-[50%]  mt-3 ' src={this.props.cosmetics} alt="RD Mart Cosmetics Section" />


            </div>


          </div>

          {/* Bottom part of the container */}
          <div className="bottom mt-4 flex justify-between ">


            {/* Bottom left */}
            <div className="left  bg-[#F5EDED] border-black  flex flex-col justify-end w-[58%] rounded-2xl">
              <div className="imgContainer2 flex flex-col items-center justify-end">
                <h3 className='  text-4xl  text-[#6482AD] font-semibold pb-8 ' >Beverage</h3>

                <img className='w-[90%]   bottom-0  ' src={this.props.beverage} alt="RD Mart Beverage Section" />
              </div>
            </div>


            {/* Bottom right */}


            <div className="left bg-[#F5EDED] flex flex-col   w-[40%] rounded-2xl">
              <h3 className='groceryh3 text-4xl mt-3 ml-3  text-[#6482AD] flex  font-semibold  ' >Cleaning</h3>
              <div className="imgContainer flex justify-end">

                <img className='w-[70%]   right-2 mt-3 ' src={this.props.cleaning} alt="RD Mart Grocery Section" />
              </div>
            </div>



          </div>
        </div>




      </>
    )
  }
}
