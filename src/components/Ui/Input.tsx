import React from 'react'
interface InputProps{
  value : any,
  onChange: (par:any)=>void,
  type : string
}
function Input({value , onChange,type} : InputProps) {
  return (
    <div className='py-2 px-3 w-full bg-lightGray rounded-full'>
     <input value={value} type={type} onChange={(e)=>onChange(e.target.value)} className='p-0 m-0 text-sm text-gray-600 bg-transparent border-none active:outline-none focus:outline-none'/>   
    </div>
  )
}

export default Input