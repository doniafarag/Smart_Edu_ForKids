class AppError extends Error {
    constructor(){
        super()
        
     
    }
    Error(message,status,code){
        this.message =message
        this.status =status
        this.code =code
        return this
    }
}
export default new AppError()

  