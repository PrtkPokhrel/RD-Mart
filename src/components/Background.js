import React, { Component } from 'react'

export default class Background extends Component {
    render() {
        let{imageUrl}=this.props
        return (
            <>

                <div className='containerBg h-64 border border-black'style={{backgroundImage:`url(${imageUrl})`}} >

                </div>


            </>
        )
    }
}
