import React, { Component, PropTypes } from 'react'
import Dragula from 'react-dragula'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'
import 'string-titlecase'

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
    const groups = [ 'comfort', 'learning', 'terror' ]
    const {dragger} = this.state

    groups.forEach((category) => {
      const container = document.querySelector(`.${category}`)
      dragger.containers.push(container)
    })

    dragger.on('drop', function (el, target, source, sibling) {
      const itemId = el.getAttribute('id')
      const category = target.getAttribute('id')

      Items.update(itemId, {
        $set: { category },
      });
    })
  }


  renderItems(category) {
    return this.props.items
              .filter(item => item.category === category)
              .map(item => <Item key={item._id} item={item} removeItem={this.removeItem}/>)
  }

  render() {
    const groups = [ 'comfort', 'learning', 'terror' ]

    return (
      <div className='container'>
        <header className='u-full-width'>
          <h1>Learning Grid</h1>
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <select ref="categorySelect">
              {groups.map(category => <option value='category'>{category.titlecase()} Zone</option>)}
            </select>
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new items" />
          </form>
        </header>
        <div className='row'>
          {groups.map(category => this.renderGroups(category))}
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
