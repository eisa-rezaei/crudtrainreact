interface PostKhabar {
    id : number,
    index: number,
    name : string,
    register : Date,
    tags : string[],
    age : number
}
export type PostContextType = {
    Posts: PostKhabar[],
    UpdatePost: (data: PostKhabar[]) => void,
    Filtered : PostKhabar[],
    SetFiltered : (data:PostKhabar[])=>void,
}
export interface NewPostForm{
    name : string, 
    age : number,
    index : number
}
export default PostKhabar;
