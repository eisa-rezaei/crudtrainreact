import React, { useState,useContext } from 'react'
import Input from '../../components/Ui/Input'
import Tag from '../../components/Ui/Tag'
import Button from '../../components/Ui/Button'
import { ReactComponent as SVGIco } from '../../assets/Frame 347.svg'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { NewPostForm } from '../../models/posts'
import KhabarService from '../../services/Akhbar'
function Addpost() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            age: 0,
            index : 0,
        },
    })
    const addNewTag = ()=>{
        if(tag!=="" && !tags.includes(tag))
            setTags([...tags , tag]);
    }
    const onSubmit: SubmitHandler<NewPostForm> = (data) => {
      const newpost = {
        index : data.index,
        age : data.age,
        name : data.name,
        tags : tags
      }
      KhabarService.addPost(newpost).then((res)=>{alert(res)}).catch((err)=>{alert(err)});
    }
    const [tags , setTags] = useState<string[]>(['سامانه پیشفرض']);
    const [tag , setTag] = useState("")
    
  return (
      <form onSubmit={handleSubmit(onSubmit)} className='m-auto bg-cyan-100'>
        <div className='flex bg-zinc-300 items-center py-2' >
            <label className='text-gray-700 font-bold mx-2'>نام :</label>
              <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <Input type='input' {...field} />}
              /> 
            <label className='text-gray-700 font-bold mx-2'>سن :</label>
              <Controller
                  name="age"
                  control={control}
                  render={({ field }) => <Input type='number' {...field} />}
              /> 
            <label className='text-gray-700 font-bold mx-2'>شناسه :</label>
              <Controller
                  name="index"
                  control={control}
                  render={({ field }) => <Input type='number' {...field} />}
              /> 
            <label className='text-gray-700 font-bold mx-2'>سامانه ها:</label>
            <Input value={tag} type='input' onChange={setTag} />
            <div className='mx-1'></div>
              <button onClick={addNewTag} type='button' className='flex rounded-full py-2 px-4 flex-row text-sm items-center text-white bg-labelColor'>افزودن</button>
            <div className='flex justify-start overflow-scroll flex-wrap items-center mx-2 rounded-full py-2 px-10 bg-zinc-600'>
                {tags.map((value , ind)=>{
                    return <div onClick={()=>{const newTag = tags.filter((val)=>val!==value) 
                    setTags(newTag)}}>
                        <Tag key={ind} value={value}/>
                        </div>
                })}
            </div>
                <Button type='submit' value='افزودن پست' Icon={SVGIco}></Button>
        </div>  
    </form>
  )
}

export default Addpost