import React, { Component, PropTypes } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <button>
          {this.props.item.text}
          <i className='fa fa-times fa-2x remove'></i>
        </button>
      </div>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}
