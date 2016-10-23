import React, { Component } from 'react'

import Item from './Item.jsx'

export default class App extends Component {
  getItems() {
    return [
      {_id: 1, text: 'item1', category: 'comfort'},
      {_id: 2, text: 'item2', category: 'learning'},
      {_id: 3, text: 'item3', category: 'terror'},
      {_id: 4, text: 'item4', category: 'terror'},
      {_id: 5, text: 'item5', category: 'comfort'},
    ]
  }

  renderItems(category) {
    return this.getItems()
              .filter(item => item.category === category)
              .map(item => <Item key={item._id} item={item} />)
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
              {this.renderItems('comfort')}
            </ul>
          </div>
          <div className='one-third column learning'>
            <h3>Learning<br />Zone</h3>
            <ul>
              {this.renderItems('learning')}
            </ul>
          </div>
          <div className='one-third column terror'>
            <h3>Terror<br />Zone</h3>
            <ul>
              {this.renderItems('terror')}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}
