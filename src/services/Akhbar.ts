import axios from "axios";
import PostKhabar from "../models/posts";
class Akhbar{
    private lastId :number =0;
    private _length : number =0
    http = axios.create({ baseURL: 'http://localhost:3002/'})
    async getPosts(limit:number){
        try{
            const response = await this.http.get<PostKhabar[]>('/posts');
            this._length = response.data.length;
            this.lastId = response.data[response.data.length-1].id + 1;
            return response.data.slice(response.data.length - limit , response.data.length).reverse();
        }catch(err:any){
            console.log(err.message)
            return []
        }
    }  
    get lenght():number
    {return this._length};
    async deletePost(id : number)
    {
        this._length = this._length -1
        try{
            const response = await this.http.delete('/posts/' + id);
            return response.data;
        }catch(err: any)
        {
            console.log('error on delete action for post' + err)
            return null;
        }
    }
    async addPost(data :{age : number , name : string,index : number,tags : string[]})
    {
        console.log(this.lastId)
        const newpost:PostKhabar = {
            id :this.lastId,
            age:data.age,
            name : data.name,
            registered:new Date(),
            index:data.index,
            tags : data.tags
        }
        try{
            const response = await this.http.post('/posts',newpost);
            return "The new post created with the name " + response.data; 
        }catch(err : any)
        {
            console.log("error in adding post" + err);
            return null;
        }
    }
}
const KhabarService = new Akhbar()
export default KhabarService;
