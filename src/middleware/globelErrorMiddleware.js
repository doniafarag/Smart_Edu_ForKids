

export const globalError = (err,req,res,next)=>{
    let error =err.message
    let code =err.code||500
    let status = err.status
    process.env.MODE == "development" ?
        res.status(code).json({error ,status,code, stack: err.stack}) :   
        res.status(code).json({error})
}