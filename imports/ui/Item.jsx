import React from 'react'

export const Item = ({item, removeItem}) => (
  <div>
    <button>
      {item.text}
      <i className='fa fa-times fa-2x remove' onClick={removeItem.bind(null, item._id)}></i>
    </button>
  </div>
)
