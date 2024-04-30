import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import {subjectModel} from "../../../database/models/userSubject.js"
import {Ques} from "../../../database/models/ques.js"

// add score of subject when answer the correct answer
export const addScorOFSub = catchError(

 async(req,res,next)=> {
    const { answerOfUser,quesId } = req.body;
    const userId = req.user._id
    const {subjectName, levelName, titleOfQues, score,answer} = await Ques.findById(quesId)
    if(answerOfUser !== answer){
       return  next( AppError.Error('answer is not correct',"faile",404))
    }
    let userSubject = await subjectModel.findOne({ userId,subject:subjectName });

    if (!userSubject) {
      // If the user subject doesn't exist, create a new one
      userSubject = new subjectModel({ userId, subject:subjectName,levels:[],scoreOfSubject:0 });
    }


    let level = userSubject.levels.find(
      (lvl) => lvl.titleOfLevel === levelName
    );

    if (!level) {
      // If the level doesn't exist, create a new one
      const newLevel = {
        titleOfLevel: levelName,
        questions: [],
        scoreOfLevel: 0,
      };
      userSubject.levels.push(newLevel);
       level = userSubject.levels.find(
        (lvl) => lvl.titleOfLevel === levelName
      );
    }

    const question = { titleOfQues: titleOfQues, scoreOfQues: score };
    let ques = level.questions.find(
        (q) => q.titleOfQues === titleOfQues
      );
    if(ques){
        return  next( AppError.Error('ques already exist',"faile",404))
    }
    level.questions.push(question);

    // // Calculate and update the level's score
    level.scoreOfLevel += score;
     userSubject.scoreOfSubject = userSubject.levels.reduce((acc,level)=>acc+ level.scoreOfLevel,0)

    // // Save the updated user subject document
    const updatedUserSubject = await userSubject.save();
    res.status(200).send({messgae:"done",data:updatedUserSubject})
    }
)
// get user subjects
export const getUserSubs = catchError(

    async(req,res,next)=> {
        const userId = req.user._id
        const userSubject = await subjectModel.find({ userId });
        if(!userSubject) return next(AppError("no subject yet","fail",400))
        res.status(200).json({status:"sucess",data:userSubject})

    })
    // get user subjects
export const getUserSub = catchError(
    async(req,res,next)=> {
        const _id = req.params.id
        const userSubject = await subjectModel.findById(_id);
        if(!userSubject) return next(AppError("no subject founded","fail",400))
        res.status(200).json({status:"sucess",data:userSubject})

    })