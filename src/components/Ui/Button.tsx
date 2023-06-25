import React from 'react'
interface ButtonInterface {
    value : string,
    Icon?: any,
    primary ?: boolean,
    apply ?: boolean,
    onClick? :()=>void,
  type?: "button" | "submit" | "reset"
}
function Button({value, Icon, primary,  apply,onClick,type} :ButtonInterface) {
  return ( 
    <button type={type} onClick={()=>{if(onClick)onClick()}} className={['flex rounded-full py-2 px-4 flex-row text-sm items-center text-white first-letter:', primary ? 'bg-primaryBtn':apply ?'bg-labelColor':'bg-goldbtn font-medium px-6'].join(" ")}>
      <div className='mr-1'>{value}</div>
      <div>{Icon &&<Icon/>}</div>
    </button>
  )
}

export default Button