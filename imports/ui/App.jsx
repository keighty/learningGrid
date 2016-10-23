import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Items } from '../api/items.js'
import Item from './Item.jsx'

class App extends Component {

  renderItems(category) {
    return this.props.items
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

App.propTypes = {
  items: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    items: Items.find({}).fetch(),
  }
}, App)
