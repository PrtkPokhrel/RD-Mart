 import React, { Component } from 'react'
 import Navigation from './components/Navigation'
import Background from './components/Background'
import bgimage from './components/bg.png'
import logo from './components/logo.png'
 
 export default class App extends Component {
   render() {
     return (
       <div>
        <Navigation logo={logo}/>
        <Background imageUrl={bgimage} />
       </div>
     )
   }
 }
 