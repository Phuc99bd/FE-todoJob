import axios from "axios";

const getLocalStorge = ()=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let tokenKey = localStorage.getItem('tokenKey')
            if(!tokenKey)
                return resolve(false);
            
            let item = JSON.parse(tokenKey);
            let now = new Date();
            if(now.getTime() > item.expiry){
                return resolve(false);
             }
            await axios.get("/verify").then(res=>{
                console.log(res.data.success);
                return (res.data.success) ? resolve(true) : resolve(false);
            })
        }catch(err){
            resolve(false);
        }
       
    })
   
}
export default getLocalStorge;