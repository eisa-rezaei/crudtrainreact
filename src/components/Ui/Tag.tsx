import React from 'react'
interface tagInterface { 
    value : string,
}
function Tag({value}:tagInterface) {
  return (
    <div className='bg-white h-full py-2 px-4 mx-2 rounded-full text-xs'>{value}</div>
  )
}

export default Tag