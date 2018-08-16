import React, { Component } from 'react'

class AddFishForm extends Component {
  nameRef = React.createRef()
  priceRef = React.createRef()
  statusRef = React.createRef()
  deskRef = React.createRef()
  imageRef = React.createRef()

  createFish = event => {
    // 1. Stop form to reload page.
    event.preventDefault()
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desk: this.deskRef.value.value,
      image: this.imageRef.value.value
    }
    console.log(fish)
    this.props.addFish(fish)
    // 2. Refresh the form
    event.currentTarget.reset()
  }

  render () {
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input name='name' ref={this.nameRef} type='text' placeholder='Name' />
        <input
          name='price'
          ref={this.priceRef}
          type='text'
          placeholder='Price'
        />
        <select name='status' ref={this.statusRef}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold out!</option>
        </select>
        <textarea name='desk' ref={this.deskRef} placeholder='Desk' />
        <input
          name='image'
          ref={this.imageRef}
          type='text'
          placeholder='Image'
        />
        <button type='submit'>+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm
