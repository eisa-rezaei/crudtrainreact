import React from 'react'

function Label(props) {
  return (
    <label className='text-labelColor text-sm align-middle mx-2'>{props.children}</label>
  )
}

export default Label