import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import {subjectModel} from "../../../database/models/userSubject.js"
// add score of subject when answer the correct answer
export const addScorOFSub = catchError(
    async(req,res,next)=>{
        const userId=  req.params.id
        const titleOfSub =req.body.titleOfSub
        const titleOfLevel = req.body.titleOfLevel
        const scoreOfQues = req.body.scoreOfQues
        const titleOfQues = req.body.titleOfQues
        const addScore = await subjectModel.create({
            userId,
            subject:{
                titleOfSub,
                levels:{
                    titleOfLevel,
                    questions:{
                        $push:{
                            titleOfQues,
                            scoreOfQues
                        }
                }}

                
            }

        })
        res.send(addScore)
    }
)