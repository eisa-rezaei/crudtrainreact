import React from 'react'
interface tagInterface { 
    value : string,
}
function Tag({value}:tagInterface) {
  return (
    <div className='bg-white text-[#8D8D8D] font-medium h-full py-2 px-6 mx-1 rounded-full text-sm'>{value}</div>
  )
}

export default Tag