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
    <button type={type} onClick={()=>{if(onClick)onClick()}} className={['flex align-middle rounded-full font-bold text-sm py-2  min-w-[100px] justify-evenly flex-row-reverse items-center text-white', primary ? 'bg-primaryBtn':apply ?'bg-labelColor':'bg-goldbtn font-medium px-6'].join(" ")}>
      <div className='mr-1 text-center w-full'>{value}</div>
      <div>{Icon &&<Icon/>}</div>
    </button>
  )
}

export default Button