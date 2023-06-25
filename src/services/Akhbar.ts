import axios from "axios";
import PostKhabar from "../models/posts";
class Akhbar{
    lastId :number =0;
    http = axios.create({ baseURL: 'http://localhost:3030/'})
    async getPosts(limit:number){
        try{
            const response = await this.http.get<PostKhabar[]>('/posts');
            this.lastId = response.data.length+1;
            return response.data.slice(this.lastId-limit -1,this.lastId-1).reverse();
        }catch(err:any){
            console.log(err.message)
            return []
        }
    }  
    async deletePost(id : number)
    {
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
        const newpost:PostKhabar = {
            id : this.lastId,
            age:data.age,
            name : data.name,
            register:new Date(),
            index:data.index,
            tags : data.tags
        }
        try{
            const response = await this.http.post('/posts',newpost);
            return "The new post created with the name " + data.name; 
        }catch(err : any)
        {
            console.log("error in adding post" + err);
            return null;
        }
    }
}
const KhabarService = new Akhbar()
export default KhabarService;
