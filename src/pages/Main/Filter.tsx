import React,{useState,useContext} from 'react'
import Input from '../../components/Ui/Input'
import Button from '../../components/Ui/Button'
import { ReactComponent as SVGIco } from '../../assets/addd.svg'
import Label from '../../components/Ui/Label'
import PostKhabar, { PostContextType } from '../../models/posts'
import { PostContext } from '../../context/Postcontext'
import {Link} from 'react-router-dom'
import KhabarService from '../../services/Akhbar'
export default function Filter() {
  const { Posts,SetFiltered} = useContext(PostContext) as PostContextType; 
  const [nameInput, setName]= useState("");
  const [index, setIndex] = useState(0);
  const [system, setSystem] = useState("");
  const handleFilterSubmit = ():void=>{
  const newPosts = Posts.filter((value : PostKhabar, ind : number)=>{
      return (value.tags.includes(system) || system==="") &&(!index || index === value.index) && 
     (nameInput ==="" || value.name===nameInput)
     ;})
    SetFiltered(newPosts);
  }
  return (
    <div className='flex items-center justify-between flex-row'>
      <div className='flex items-center'>
        <span className='text-sm font-medium text-gray-900'>فیلتر براساس:</span>
        <Label>نام گروه :</Label>
        <Input type='input' value={nameInput} onChange={setName}/>
        <Label>شناسه گروه:</Label>
        <Input type='number' value={index} onChange={setIndex}/>
        <Label>:نام سامانه</Label>
        <Input type='string' value={system} onChange={setSystem} />
        <Button onClick={handleFilterSubmit} value='اعمال فیلتر' apply/>
      </div> 
      <div className='flex items-center flex-row'>
        <span className='text-sm text-gray-400 font-medium'>{KhabarService.lenght} گروه</span>
        <Link to={'/newpost'}>
          <Button Icon={SVGIco} value={"افزودن گروه"}/>
        </Link>
      </div>
    </div>
  ) 
}
