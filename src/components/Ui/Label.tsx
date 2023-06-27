import React from 'react'

function Label(props:any) {
  return (
    <label className='text-labelColor text-xs align-middle mx-2'>{props.children}</label>
  )
}

export default Label