import { levelModel } from '../../../database/models/levels.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { unitModel } from '../../../database/models/unit.js'
import { catModel } from '../../../database/models/category.js'
import cloudinary from '../../utils/cloudinary.js'
import { typingLetters } from '../../../database/models/typingLetters.js'


const addTyping= catchError(async(req,res,next)=>{
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
    const typingLetters = new typingLetters({...req.body,subjectId,subjectName,levelId,levelName,unitId,unitName,lessonName,catId})
    await typingLetters.save()
    res.send(typingLetters)
})
const addImageQues= catchError(async (req,res,next)=>{
  const imagesResources = [];

    for (const file of req.files) {
      const { public_id, secure_url } = await cloudinary.uploader.upload(
        file.path,
        {
          folder: `smartEducational/ques/${req.params.id}/image`,
        },
      );
  
      imagesResources.push({ public_id, secure_url });
    }
  
    const ques = await typingLetters.findByIdAndUpdate(
      req.params.id,
      { images: imagesResources },
      { new: true }
    );
    const ques1= await typingLetters.findById(req.params.id)
    res.json({ message:"Done",ques1 })
})

const getAllQues = catchError(async (req,res,next)=>{
  const queryObj={...req.query};
        const excluded=['page','sort','limit','fields'];
        excluded.forEach(el => delete queryObj[el]);
        const query= typingLetters.find(queryObj);
        const ques=await query;
    res.status(201).json({message: 'success', ques})
   
    
})

const getSingleQues = catchError(async (req,res,next)=>{
    const ques = await typingLetters.findById(req.params.id)
    !ques&& next( AppError.Error('ques not found',"faile",404))
    ques&& res.status(201).json({message: 'success',ques})
})

const updateQues= catchError( async (req,res,next)=>{
    const ques= await typingLetters.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    // console.log(req.params.id)
    ques&& res.status(201).json({message: 'success',ques})
    !ques&& next( AppError.Error('ques not found',"fail",404))
})

const removeQues =  catchError( async (req,res,next)=> {
    const ques = await typingLetters.findByIdAndDelete(req.params.id)
    !ques && next( AppError.Error('ques not found',"fail",404))
    ques && res.status(201).json({message: 'success',ques})
    })
    


export{
    addTyping,
    addImageQues,
    updateQues,
    getSingleQues,
    getAllQues,
    removeQues
}


