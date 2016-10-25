import React from 'react'

export const Item = ({item, removeItem}) => (
  <div id='item._id'>
    <button>
      {item.text}
      <i className='fa fa-times fa-2x remove' onClick={removeItem}></i>
    </button>
  </div>
)
