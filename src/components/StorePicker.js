import React, { Component } from 'react'
import { getFunName } from '../helpers'

class StorePicker extends Component {
  // constructor () {
  //   super();
  //   // this.goToStore = this.goToStore.bind(this);       // Bind this in the constructor OR
  // }

  myInput = React.createRef()

  goToStore = event => {
    // Use the arrow function
    // 1. Stop the form from submitting
    event.preventDefault()
    // 2. Get the text from thet input
    console.log(this.myInput.value.value)
    const storeName = this.myInput.value.value;
    // 3. Change the page to /store/whatever-the-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render () {
    return (
      <React.Fragment>
        {/* It is the only way to comment smt in React */}
        <form className='store-selector' onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type='text'
            required
            ref={this.myInput}
            placeholder='Store Name'
            defaultValue={getFunName()}
          />
          <button type='submit'>Visit store →</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker
