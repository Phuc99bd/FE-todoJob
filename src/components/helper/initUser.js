import axios from "axios";


const InitUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let res = await axios.get("/user");
            resolve(res.data);
        }catch(err){
            resolve(err);
        }
       
    })
}
export default InitUser;