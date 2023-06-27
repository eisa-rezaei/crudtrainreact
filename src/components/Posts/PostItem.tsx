import React from 'react';
import PostKhabar from '../../models/posts';
import Tag from './Tag';
import { Link } from 'react-router-dom';
import { ReactComponent as  Delete} from '../../assets/delete.svg'
import {ReactComponent as Edit} from '../../assets/pen.svg'
import {ReactComponent as People} from '../../assets/people.svg'
import Button from '../Ui/Button';
interface PostItemInterface {
    item : PostKhabar,
    onDelete: (id : number)=>void
}
function PostItem({onDelete,item}:PostItemInterface) {
    return (
        <div className=' bg-[#F5F5F5] grid grid-cols-1 gap-y-3 rounded-[3rem] px-6 py-8 w-full mx-auto'>
            <div className='bg-white rounded-full px-3 h-14 flex justify-between items-center'>
                <h4 className='text-[#4D4D4D] mr-3 text-lg font-bold'>{item.name}</h4>
                <div className='flex text-[#646464] items-center'>
                    <span className='text-sm font-medium'>شناسه گروه:</span>
                    <div className='bg-[#FFF3CA] mr-4 text-goldbtn px-4 overflow-hidden w-40 text-center font-medium py-1 rounded-full'>{item.index}</div>
                </div>
            </div>
            <div className='bg-[#EAEAEA] rounded-full px-6 h-14 flex justify-between items-center'>
                <span className='text-sm font-medium text-[#646464]'>نام سامانه:</span>
                <div className="flex items-center overflow-hidden relative max-w-[380px]">
                    <div className='bg-gradient-to-r from-[#EAEAEA] from-5% to-[rgba(255,255,255,0)] to-95%  absolute top-0 bottom-0 -left-3 right-0 rounded-full'></div>
                    {item.tags.slice(0, 4).map((value: string, index: number) => {
                        return <Tag value={value} key={index} />
                    })}
                </div>
                <Link to={'/system/' + item.id}><span className='text-primaryBtn text-sm font-bold'>مشاهده همه</span></Link>
            </div>
            <div className='flex items-center pr-2 justify-between'>
                <div className='text-sm text-[#AFAFAF]'>
                    <div className='flex items-center'>
                        <div className='text-[#646464] ml-2'> تاریخ عضویت:</div>
                        <div> {item.registered.toString().slice(0,10)} </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-[#646464] ml-2'>تعداد کاربران :</div>
                        <div> {item.age} نفر </div>
                    </div>
                </div>
                <div className='flex w-3/5 justify-end space-x-2'>
                    <button onClick={() => onDelete(item.id)} className="bg-[#FBDFE4] font-medium p-3 ml-2 rounded-full text-white">
                        <Delete/>
                    </button>
                    <button onClick={() => onDelete(item.id)} className="bg-[#DBE8F6] font-medium p-3 rounded-full text-white">
                        <Edit />
                    </button>
                    <Button value='کاربران' Icon={People} />
                    <Button value='مدیریت' primary />
                </div>
            </div>
        </div>  
    );
}

export default PostItem;