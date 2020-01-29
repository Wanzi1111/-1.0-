const jwt=require("jsonwebtoken");
const url=require("url");

function verfi(token,keys){
    return new Promise(res=>{
        jwt.verify(token,keys,(error,result)=>{
            if(error) throw error;
            res(result)
        })
    })
}
module.exports=(options)=>{
    return async (ctx,next)=>{
        if(options.includes(url.parse(ctx.url).pathname)){
            await next();
            return
        } 

        const token=ctx.get("tokens");
        
        if(!token){
            ctx.body={code:1,msg:"没有权限,请先登录"};
            return 
        } 

        let info;
        try{
            info= await verfi(token,"wanzi")
           
        }catch(error){
            ctx.body={code:1,msg:"权限错误,请先登录"};
            return 
        }
        ctx.info=info
        await next()   
    }
}