import React, { Component } from 'react'

import Item from './Item.jsx'

export default class App extends Component {
  getItems() {
    return [
      {_id: 1, text: 'item1'},
      {_id: 2, text: 'item2'},
      {_id: 3, text: 'item3'},
    ]
  }

  renderItems() {
    return this.getItems().map(item => <Item key={item._id} item={item} />)
  }

  render() {
    return (
      <div className='container'>
        <header className='u-full-width'>
          <h1>Learning Grid</h1>
        </header>
        <div className='row'>
          <div className='one-third column comfort'>
            <h3>Comfort<br />Zone</h3>
            <ul>
              {this.renderItems()}
            </ul>
          </div>
          <div className='one-third column learning'>
            <h3>Learning<br />Zone</h3>
            <ul>
              {this.renderItems()}
            </ul>
          </div>
          <div className='one-third column terror'>
            <h3>Terror<br />Zone</h3>
            <ul>
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}
