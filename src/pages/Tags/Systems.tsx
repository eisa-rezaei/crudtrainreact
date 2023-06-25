import React from 'react'
import Tag from '../../components/Ui/Tag';
interface SystemProps{
  tags : string[]
}
function Systems({tags}:SystemProps) {
  return (
    <div className='w-6/12 m-auto bg-zinc-400 grid gap-2'>
      {tags.map((val : string , index : number)=>{
        return <Tag value={val}/>
      })}
    </div>
  )
}

export default Systems;