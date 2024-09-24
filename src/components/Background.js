import React, { Component } from 'react'
import './Css/background.css'

export default class Background extends Component {
    render() {
        let { imageUrl } = this.props
        return (
            <>


                <div className='containerBg  h-[55vh] border border-black bg-no-repeat  bg-cover bg-center flex items-center overflow-hidden' style={{ backgroundImage: `url(${imageUrl})` }} >
                    <div className="backgroundtextContainer w-[30vw] text-center  ">

                        <h1 className='backgroundH1 text-[#a6c2dd] text-4xl leading-[4rem] font-inter font-bold '>Your Neighborhood Stop for Everyday Essentials!</h1>
                        <button className="btn btn-primary my-3 bg-[#6482AD] rounded-[12px] font-bold text-[1.25rem] font-inter ">Shop Now</button>
                    </div>
                </div>




            </>
        )
    }
}
