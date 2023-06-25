import React, { useContext } from 'react'
import { PostContext } from '../../context/Postcontext'
import PostKhabar, { PostContextType } from '../../models/posts'
import PostItem from '../../components/Posts/PostItem';
import Akhbar from '../../services/Akhbar';

export default function Feed() {
  const {Filtered,SetFiltered} = useContext(PostContext) as PostContextType; 
  const onDeleteHandle = async (id : number)=>
  {
     await Akhbar.deletePost(id); 
     // fetch again ? await Akhbar.get(10)
     const newPosts = Filtered.filter((value:PostKhabar,index : number)=>
     {
        return value.id !==id;
     })
     SetFiltered(newPosts);
  }
  return (
      <div className=" grid gap-x-8 gap-y-4 mt-4 w-12/12 grid-cols-2">
        {Filtered.map((value , index)=>{
            return <PostItem onDelete={onDeleteHandle} item={value}/> 
        })} 
    </div>
  )
}


