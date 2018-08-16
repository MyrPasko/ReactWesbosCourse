import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    console.log('Fish just added!')
    //   this.state.fishes.push(fish);                                      // It is not correct.
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes }
    // 2. Add the new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish
    // 3. Set the new fishes to state
    this.setState({
      fishes: fishes
    })
  }

  loadSampleFishes = () => {
    console.log(sampleFishes)
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = key => {
    //   1. Take a copy of state
    const order = { ...this.state.order }
    // 2. Either add the order, or update the number in our order
    order[key] = order[key] + 1 || 1
    // 3. Call setState to update our state object
    this.setState({
      order: order
    })
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key => {
              return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
