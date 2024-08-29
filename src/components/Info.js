import React, { Component } from 'react'
import './Css/info.css'

export default class Info extends Component {
    render() {
        return (
            <>
                <div className="containerInfo flex justify-around my-10">

                    {/* box1 */}
                    <div className="box1 flex flex-col items-center   w-fit text-[#6482AD] ">
                        <div className="heading font-bold"><h2 className='text-2xl'>Quality Gurantee</h2></div>
                        <div className="para text-[0.9rem] mt-2 text-center w-[40%]  "><p className=''>We handpick the best products to ensure you get top quality every time.</p></div>
                    </div>
                    {/* box2 */}
                    <div className="box1 flex flex-col items-center   w-fit text-[#6482AD] ">
                        <div className="heading font-bold"><h2 className='text-2xl'>Daily Offers</h2></div>
                        <div className="para text-[0.9rem] mt-2 text-center w-[40%]  "><p className=''>Enjoy amazing deals on your favorite items every day.</p></div>
                    </div>

                    {/* box3 */}
                    <div className="box1 flex flex-col items-center   w-fit text-[#6482AD] ">
                        <div className="heading font-bold"><h2 className='text-2xl'>Secure Payment</h2></div>
                        <div className="para text-[0.9rem] mt-2 text-center w-[40%]  "><p className=''>Shop with confidence, knowing your transactions are safe and secure.</p></div>
                    </div>

                    {/* box4 */}
                    <div className="box1 flex flex-col items-center   w-fit text-[#6482AD] ">
                        <div className="heading font-bold"><h2 className='text-2xl'>Customer Service</h2></div>
                        <div className="para text-[0.9rem] mt-2 text-center w-[40%]  "><p className=''>We're here to help with a smile—every step of the way.</p></div>
                    </div>

                </div>


                <div className="emptyContainer h-[6rem] bg-[#6482AD]"></div>
            </>
        )
    }
}
