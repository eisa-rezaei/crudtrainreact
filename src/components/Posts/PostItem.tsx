import React from 'react';
import PostKhabar from '../../models/posts';
import Tag from '../Ui/Tag';
interface PostItemInterface {
    item : PostKhabar,
    onDelete: (id : number)=>void
}
function PostItem({onDelete,item}:PostItemInterface) {
    
    return (
        <div className=' bg-[#F5F5F5] rounded-3xl p-5 w-full mx-auto'
            key={item.id}>
            <h4 className='font-bold mb-1 min-h-[3rem]'>نام : {item.name}</h4>
            <p className='h-[30px]'>شناسه گروه: {item.index}</p>
            <div className='flex justify-between items-center bg-[#EAEAEA] py-2 px-4 rounded-full text-[#646464] font-medium text-sm'>
                <span>نام سامانه:</span>
                <div className="flex">
                    {item.tags.slice(0,3).map((value:string , index :number)=>{
                        
                        return <Tag value={value} key={index}/>
                    })}
                </div>
                <span className='text-primaryBtn font-bold'><button>مشاهده همه</button></span>
            </div>
            
            <div className='flex'>
                <button onClick={()=>onDelete(item.id)} className="bg-red-400 font-medium px-3 py-1 rounded-3xl text-white mt-2">Delete</button>
                <button className='bg-[#1074E9] font-medium px-5 py-1 rounded-3xl text-white mt-2 ml-2'>edit</button>
            </div>
        </div>  
    );
}

export default PostItem;