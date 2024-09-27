import React, { Component } from 'react';
import halfCircle from './Images/half circle small.svg';
import halfCircleBig from './Images/half circle big.svg';
import fb from './Images/fb.svg'
import insta from './Images/insta.svg'
import twitter from './Images/twitter.svg'
import linkden from './Images/linkden.svg'
import './Css/footer.css'
import logo from './Images/logo.png'


export default class Contact extends Component {
  render() {
    return (
      <>
      <div className='bg-[#F5EDED] flex justify-evenly '>

        <div className=" containerFooter pt-11 border-t-2 border-b-2 border-black  w-[95%]   ">
                        

          <div className="contactContainerFooter container flex justify-between   ">
            <div className="contactLeft w-[30rem]  ">
              <div className="contactLeftContainer flex flex-col items-center md:items-start">
                <h2 className='text-[#6482AD] text-[2.25rem] font-bold mt-3 font-poppins  ' ><img src={logo} className=' w-[4rem]  ' alt="" /></h2>
                <p className=' footertext text-[1.5rem] font-[400] mt-4 font-poppins ' >Your Everyday Essentials,<br/> Always Within Reach.</p>
                <div className="socialMediaContainer flex gap-4 mt-9 ">
                  {/* Social Media Icon Goes Here */}
                  <img className='fb' src={fb} alt="" />
                  <img className='insta' src={insta} alt="" />
                  <img className='twitter' src={twitter} alt="" />
                  <img className='linkden' src={linkden} alt="" />
                </div>
              </div>
            </div>
            <div className="contactMid hidden md:block  ">
              <ul >

                <h1 className='font-bold text-[1.25rem] text-[#6482AD] mt-4 font-poppins' >Most Popular Categories</h1>

                <div className='border-[2px] border-[#6482AD]   '></div>

                <li className='list-disc font-bold text-[#6482AD] mt-3 ml-5 text-[1.25rem] font-poppins' >Grocery</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5 text-[1.25rem] font-poppins' >Beverage</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5 text-[1.25rem] font-poppins'>Personal Care</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5 text-[1.25rem] font-poppins'>Home Care</li>
                <li className='list-disc font-bold text-[#6482AD] mt-2 ml-5 text-[1.25rem] font-poppins'>Vegetables and Fruits</li>
              </ul>
            </div>

            <div className="contactRightImages flex ">
              <img className=' half1 hidden  md:block   md:mt-[80%]   ' src={halfCircle} alt="" />
              <img className=' half2  hidden  md:block md:absolute   md:right-[0]  md:mt-[-15%]  '  src={halfCircleBig} alt="" />
            </div>

            
          </div>
        </div>

        
      </div>


      <div className="copyright flex justify-center text-center items-center pb-4 mt-3 text-[1rem] md:text-[1.25rem] font-[400] font-Montserrat " >Copyright© 2024 RD.Mart. All Rights Reserved.</div>

      </>
    )
  }
}

