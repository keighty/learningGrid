import React, { Component, PropTypes } from 'react'
import Dragula from 'react-dragula'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'

import { Items } from '../api/items.js'
import { Item } from './Item.jsx'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    const dragger = Dragula()
    this.state = { dragger }
  }
  renderGroups(category) {
    return (
      <div id={category} className={`one-third column ${category}`}>
        <h3>{category} zone</h3>
        {this.renderItems(category)}
      </div>
    )
  }

  removeItem(id) {
    Items.remove(id)
  }

  updateCategory(id, category) {
    Items.update(id, {$set: {category: category}})
  }

  renderItems(category) {
    return this.props.items
              .filter(item => item.category === category)
              .map(item => <Item key={item._id} item={item} removeItem={this.removeItem}/>)
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

  componentDidMount() {
    this.state.dragger.on('drop', function (el, target, source, sibling) {
      const itemId = el.getAttribute('id')
      const category = target.getAttribute('id')
      console.log(Items.find(itemId))

      Items.update(itemId, {
        $set: { category },
      });
    })
  }

  render() {
    const groups = [ 'comfort', 'learning', 'terror' ]
    const {dragger} = this.state

    groups.forEach((category) => {
      const container = document.querySelector(`.${category}`)
      dragger.containers.push(container)
    })

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
          {this.renderGroups('comfort')}
          {this.renderGroups('learning')}
          {this.renderGroups('terror')}
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
