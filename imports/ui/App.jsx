import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'

import { Items } from '../api/items.js'
import Item from './Item.jsx'


class App extends Component {
  renderItems(category) {
    return this.props.items
              .filter(item => item.category === category)
              .map(item => <Item key={item._id} item={item} />)
  }

  handleSubmit(e) {
    e.preventDefault()
    const {textInput, categorySelect} = this.refs
    const node1 = ReactDOM.findDOMNode(textInput)
    const node2 = ReactDOM.findDOMNode(categorySelect)

    const text = node1.value.trim()
    const category = node2.value

    Items.insert({
      text,
      category,
      createdAt: new Date(),
    })

    node1.value = ''
  }

  render() {
    const options = [ 'one', 'two', 'three' ]

    return (
      <div className='container'>
        <header className='u-full-width'>
          <h1>Learning Grid</h1>
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <select ref="categorySelect">
              <option value="comfort">Comfort Zone</option>
              <option value="learning">Learning Zone</option>
              <option value="terror">Terror Zone</option>
            </select>
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new items" />
          </form>
        </header>
        <div className='row'>
          <div className='one-third column comfort'>
            <h3>Comfort<br />Zone</h3>
            {this.renderItems('comfort')}
          </div>
          <div className='one-third column learning'>
            <h3>Learning<br />Zone</h3>
            {this.renderItems('learning')}
          </div>
          <div className='one-third column terror'>
            <h3>Terror<br />Zone</h3>
            {this.renderItems('terror')}
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
