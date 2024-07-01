import { levelModel } from '../../../database/models/levels.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { unitModel } from '../../../database/models/unit.js'
import { Ques } from '../../../database/models/ques.js'
import { catModel } from '../../../database/models/category.js'
import cloudinary from '../../utils/cloudinary.js'
import { MatchQuestion } from '../../../database/models/matching.js'


const addMatching= catchError(async(req,res,next)=>{
   
    const subjectName = req.body.subjectName
    const levelName =req.body.levelName
    const unitName =req.body.unitName
    const lessonName = req.body.lessonName
    const cat = await catModel.findOne({subjectName,levelName,unitName,lessonName})
    if(!cat) return  next(  AppError.Error('cat not found' ,"failed", 409))
    const catId = cat._id
    const subjectId = cat.subjectId
    const levelId = cat.levelId
    const unitId = cat.unitId
    const matching = new MatchQuestion({...req.body,subjectId,subjectName,levelId,levelName,unitId,unitName,lessonName,catId})
    await matching.save()
    res.send(matching)
})
const addImageMatching= catchError(async (req,res,next)=>{
  const {public_id , secure_url} = await cloudinary.uploader.upload(
    req.file.path,
     {folder: `smartEducational/categ/${req.params.id}/image`}
    )
const match = await MatchQuestion.findByIdAndUpdate(req.params.id,
{image:{public_id , secure_url}},
{new:true}) 
const match1= await MatchQuestion.findById(req.params.id)
res.json({ message:"Done",match1,file:req.file })

})

const getAllMatching = catchError(async (req,res,next)=>{
  const queryObj={...req.query};
        const excluded=['page','sort','limit','fields'];
        excluded.forEach(el => delete queryObj[el]);
        const query= MatchQuestion.find(queryObj);
        const matching=await query;
    res.status(201).json({message: 'success', matching})
   
    
})

const getSingleMatching = catchError(async (req,res,next)=>{
    const matching = await MatchQuestion.findById(req.params.id)
    !matching&& next( AppError.Error('matching not found',"faile",404))
    matching&& res.status(201).json({message: 'success',matching})
})

const updateMatching= catchError( async (req,res,next)=>{
    const matching= await MatchQuestion.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    // console.log(req.params.id)
    matching&& res.status(201).json({message: 'success',matching})
    !matching&& next( AppError.Error('matching not found',"fail",404))
})

const removeMatching =  catchError( async (req,res,next)=> {
    const matching = await MatchQuestion.findByIdAndDelete(req.params.id)
    !matching && next( AppError.Error('matching not found',"fail",404))
    matching && res.status(201).json({message: 'success',matching})
    })

// const Submit =  catchError( async (req,res,next)=> {
//   const {selectedOptions} = req.body;
//   const id = req.params.id
//   const question = await MatchQuestion.findById(id)
//   if (!question){
//      return next(AppError.Error("Question not found" , 'failed',404))
//   }
//   const isCorrect = selectedOptions.every(selectedOption=>{
//      const correctOption = question.correctOptions.find(co=>co.letter == selectedOption.letter);
//      return correctOption && correctOption.optionId.toString()== selectedOption.optionId;
//   });

//   return res.status(200).json({correct:isCorrect});
//    })
    


export{
    addMatching,
    addImageMatching,
    updateMatching,
    getSingleMatching,
    getAllMatching,
    removeMatching,
    // Submit
}


