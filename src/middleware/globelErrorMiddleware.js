

export const globalError = (err,req,res,next)=>{
    let error =err.message
    let code =err.code||500
    let status = err.status
    process.env.PRODUCTION !== "true" ?
        res.json({error ,status,code, stack: err.stack}) :   
        res.json({error,stack: err.stack})
}