
import { globalError } from "./middleware/globelErrorMiddleware.js"
import authRouter from "./modules/auth/auth.router.js"
import userRouter from "./modules/user/user.routes.js"
import  AppError  from "./utils/AppError.js"
import cors from 'cors'
import { dbConnection } from '../database/dbConnection.js'
import subjectRouter from "./modules/subject/subject.router.js"
import levelRouter from "./modules/level/level.router.js"
import unitRouter from "./modules/unit/unit.router.js"
import categRouter from "./modules/categ/categ.router.js"
import quesRouter from "./modules/question/ques.router.js"
import reviewRouter from "./modules/review/review.routes.js"



export const bootstrap = (app,express)=>{
    app.use(cors())  // Allow Access From anyWhere

    app.get('/',(req,res,next)=>{
res.send("Welcome to ay 7haga")
    })
    // app.use(express.json({}))
    app.use('/users',userRouter)
    app.use('/auth',authRouter)
    app.use('/subject',subjectRouter)
    app.use('/level',levelRouter)
    app.use('/unit',unitRouter)
    app.use('/cat',categRouter)
    app.use('/ques',quesRouter)
    app.use('/review',reviewRouter)
    // app.use("/uploads",express.static('./uploads'))
    app.all('*',(req,res,next)=>{
        next(AppError.Error('not found endpoint',"fail",404))
    })
  
    app.use(globalError)
    dbConnection()
}