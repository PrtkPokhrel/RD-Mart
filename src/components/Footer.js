import React, { Component } from 'react';
import halfCircle from './Images/half circle small.svg';
import halfCircleBig from './Images/half circle big.svg';
import './Css/footer.css'


export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="container containerFooter">
                        

          <div className="contactContainerFooter border border-black mt-11 rounded-md  flex justify-around ">
            <div className="contactLeft w-[30rem]  ">
              <div className="contactLeftContainer">
                <h2 className='text-[#6482AD] text-[2.25rem] font-bold mt-3 ' >RD Mart</h2>
                <p className='text-[2rem] font-medium mt-4' >Your Everyday Essentials, Always Within Reach.</p>
                <div className="socialMediaContainer mt-3 ">
                  Social Media Icon Goes Here
                </div>
              </div>
            </div>
            <div className="contactMid">
              <ul>

                <h1 className='font-bold text-[1.25rem] text-[#6482AD] mt-4 ' >Most Popular Categories</h1>

                <div className='border-[3px] border-[#6482AD]  '></div>

                <li className='list-disc font-bold text-[#6482AD] mt-3 ml-5 text-[1.25rem]' >Grocery</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5   text-[1.25rem]' >Beverage</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5 text-[1.25rem]'>Personal Care</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5 text-[1.25rem]'>Home Care</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5 text-[1.25rem]'>Vegetables and Fruits</li>
              </ul>
            </div>
            <div className="contactRightImages flex ">
              <img className=' half1 mt-[100%]    ' src={halfCircle} alt="" />
              <img className=' half2 absolute right-0 w-[40vh] mt-[-12rem]' src={halfCircleBig} alt="" />
            </div>
          </div>
        </div>

        <div className="ignore mt-7"></div>
      </>
    )
  }
}

