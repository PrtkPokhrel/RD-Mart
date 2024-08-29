import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Background from './components/Background'
import Info from './components/Info'
import Product from './components/Product'
import Contact from './components/Contact'
// Images imports starts from here
import bgimage from './components/Images/background.png'
import logo from './components/Images/logo.png'
import Footer from './components/Footer'
// import grocery from './components/Images/grocery.png'
import cosmetics from './components/Images/cosmetics.png'
import beverage from './components/Images/beverage.png'
import cleaning from './components/Images/cleaning.png'
import groceryBig from './components/Images/groceryBig.png'



export default class App extends Component {
  render() {
    return (
      <div>

        <div id='Home'>
          <Navigation id='Home' logo={logo} />
        </div>


        <Background imageUrl={bgimage} />
        <Info />

        <div id='Product' >

          <Product id='Product' grocery={groceryBig} cosmetics={cosmetics} beverage={beverage} cleaning={cleaning} />
        </div>


        <div id="Contact">

          <Contact />
        </div>

        <Footer/>


      </div>
    )
  }
}
