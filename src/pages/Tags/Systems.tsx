import React from 'react'
import Tag from '../../components/Posts/Tag';
import { Link, useParams } from 'react-router-dom';
import { PostContext } from '../../context/Postcontext';
import PostKhabar, { PostContextType } from '../../models/posts';
import Button from '../../components/Ui/Button';

function Systems() {
  const {id} = useParams();
  const { Posts } = React.useContext(PostContext) as PostContextType; 
  const tags = Posts.find((value : PostKhabar, index )=>{
    if(id)
      return value.id === parseInt(id)
    else return null
  })?.tags;
  return (
    <>
      <div className='w-6/12 m-auto bg-zinc-400 p-5 rounded-xl grid gap-2'>
        {tags ? tags.map((val : string )=>{
          return <Tag value={val}/>
        }) : 'آی دی اشتباه است یا حاوی سامانه نیست'}
      </div>
      <Link to={'/'}><Button value='صفحه اصلی'/></Link>
    </>
  )
}

export default Systems;