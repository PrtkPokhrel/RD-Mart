import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Background from './components/Background'
import Info from './components/Info'
import Product from './components/Product'
import bgimage from './components/background.png'
import logo from './components/logo.png'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation logo={logo} />
        <Background imageUrl={bgimage} />
        <Info/>
        <Product/>
      </div>
    )
  }
}
