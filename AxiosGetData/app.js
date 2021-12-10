import axios from "axios";
const GetUserandPost = (number) => {
    return new Promise( async (resolve,reject) =>{
        const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+number)
        const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+number)
        let UserandPost = await {...user,...post}
        resolve(UserandPost);
    })
}

export default GetUserandPost;

