import React, { useContext, useEffect } from 'react'
import Feed from './Feed'
import Filter from './Filter'
import Akhbar from '../../services/Akhbar';
import { PostContext } from '../../context/Postcontext';
import PostKhabar, { PostContextType } from '../../models/posts';
export default function Main() {
  const {UpdatePost,SetFiltered} = useContext(PostContext) as PostContextType;
  useEffect(()=>{
    loadMainData();
  },[]);
  const loadMainData =async () => {
    const Data =await Akhbar.getPosts(10) as PostKhabar[];
    UpdatePost(Data);
    SetFiltered(Data);
    console.log(Data)
  }
  
  return (
    <main className='px-48 py-6'>
      <Filter/>
      <hr className='my-4 bg-black text-black border-gray-500'/>
      <Feed/>
    </main>
  )
}
