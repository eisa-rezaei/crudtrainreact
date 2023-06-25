import React, { FC, createContext, useState } from "react";
import PostKhabar, { PostContextType } from "../models/posts";

export const PostContext = createContext<PostContextType| null>(null);

interface Props {
    children: React.ReactNode;
}
const PostProvider: FC<Props> = ({ children })=>{
    //defining the state of context 
    const [Posts, setPosts] = useState<PostKhabar[]>([]);
    const [Filtered , setFiltered] = useState<PostKhabar[]>([]);
    const UpdatePost = (Data: PostKhabar[])=>{
        setPosts(Data);
    }
    const SetFiltered = (Data :PostKhabar[])=>{
        setFiltered(Data);
    }
    return <PostContext.Provider value={{ Posts, UpdatePost, Filtered,SetFiltered}}>{children}</PostContext.Provider>   
}
export default PostProvider;