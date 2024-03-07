import { subjectModel } from '../../../database/models/subject.model.js'
import { userModel } from '../../../database/models/user.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import  AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import cloudinary from '../../utils/cloudinary.js'

const addSubject= catchError(async (req,res,next)=>{
    const subject= new subjectModel(req.body)
    await subject.save()
    res.status(201).json({message: 'success',subject})
})

const addImageSubject = catchError(async (req,res,next)=>{
    const {public_id , secure_url} = await cloudinary.uploader.upload(
        req.file.path,
        {folder: `smartEducational/subject/${req.params.id}/image`},
        //  {folder: `smartEducational/subject/${req.params.id}/audio`,resource_type:"video"}
        )
   const subject = await subjectModel.findByIdAndUpdate(req.params.id,
    {image:{public_id , secure_url}},
    //  {video:{public_id , secure_url}},
    {new:true})
    const subject1= await subjectModel.findById(req.params.id)
    res.json({ message:"Done",subject1,file:req.file })
    
})

const addAudioSubject = catchError(async (req,res,next)=>{
    const {public_id , secure_url} = await cloudinary.uploader.upload(
        req.file.path,
         {folder: `smartEducational/subject/${req.params.id}/audio`,resource_type:"video"}
        )
   const subject = await subjectModel.findByIdAndUpdate(req.params.id,
    {video:{public_id , secure_url}},
    {new:true}) 
    const subject1= await subjectModel.findById(req.params.id)
    res.json({ message:"Done",subject1,file:req.file })
    
})



const getAllSubjects = catchError(async (req,res,next)=>{
    let apiFeatures = new ApiFeatures( subjectModel.find(), req.query)
    .paginate().fields().filter().sort().search()
  // execute query
  const  subjects = await apiFeatures.mongooseQuery
  res.status(201).json({message: 'success',page:apiFeatures.page , subjects})
})

const getSingleSubject = catchError(async (req,res,next)=>{
    const subject = await subjectModel.findById(req.params.id)
    !subject&& next(AppError.Error('Subject not found',"failed",404))
    subject&& res.status(201).json({message: 'success',subject})
})

const updateSubject= catchError( async (req,res,next)=>{
    const subject= await subjectModel.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    // console.log(req.params.id)
    !subject&& next(AppError.Error('Subject not found',"failed",404))
    subject&& res.status(201).json({message: 'success',subject})
    
})

const removeSubject =  catchError( async (req,res,next)=> {
    const subject = await subjectModel.findByIdAndDelete(req.params.id)
    !subject && next( AppError.Error('Subject not found',"failed",404))
    subject && res.status(201).json({message: 'success',subject})
    })
    


export{
    addSubject,
    addImageSubject,
    addAudioSubject,
    updateSubject,
    getSingleSubject,
    getAllSubjects,
    removeSubject
}


