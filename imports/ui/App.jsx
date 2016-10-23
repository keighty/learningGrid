import React, { Component } from 'react'

import Resource from './Resource.jsx'

export default class App extends Component {
  getItems() {
    return [
      {_id: 1, text: 'item1'},
      {_id: 2, text: 'item2'},
      {_id: 3, text: 'item3'},
    ]
  }

  renderItems() {
    return this.getItems().map(item => <Resource key={item._id} item={item} />)
  }

  render() {
    return (
      <div className='container'>
        <header>
          <h1>Item List</h1>
        </header>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }

}
