import { levelModel } from '../../../database/models/levels.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { subjectModel } from '../../../database/models/subject.model.js'
import cloudinary from '../../utils/cloudinary.js'


const addLevel= catchError(async (req,res,next)=>{
    const subject = await subjectModel.findOne({name:req.body.subjectName})
    if(!subject){return res.json(AppError.Error("subject not found","faile",404))}
    const subjectId = subject._id
    const subjectName = subject.name
    const level= new levelModel({...req.body,subjectName,subjectId})
    await level.save()
    res.status(201).json({message: 'success',level})
})

const addImageLevel = catchError(async (req,res,next)=>{
    const {public_id , secure_url} = await cloudinary.uploader.upload(
        req.file.path,
        {folder: `smartEducational/level/${req.params.id}/image`},
        )
   const level = await levelModel.findByIdAndUpdate(req.params.id,
    {image:{public_id , secure_url}},
    {new:true})
    const level1= await levelModel.findById(req.params.id)
    res.json({ message:"Done",level1,file:req.file })
    
})



const getAllLevels = catchError(async (req,res,next)=>{
    let apiFeatures = new ApiFeatures( levelModel.find(), req.query)
    .paginate().fields().filter().sort().search()
// execute query
//   const  levels = await apiFeatures.mongooseQuery
    const query = req.query
    const  levels = await levelModel.find(query)
    res.status(201).json({message: 'success',page:apiFeatures.page , levels})
})

const getSingleLevel = catchError(async (req,res,next)=>{
    const level = await levelModel.findById(req.params.id)
    !level&& next( AppError.Error('level not found',"faile",404))
    level&& res.status(201).json({message: 'success',level})
})

const updateLevel= catchError( async (req,res,next)=>{
    const level= await levelModel.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    // console.log(req.params.id)
    level&& res.status(201).json({message: 'success',level})
    !level&& next( AppError.Error('level not found',"fail",404))
})

const removeLevel =  catchError( async (req,res,next)=> {
    const level = await levelModel.findByIdAndDelete(req.params.id)
    !level && next( AppError.Error('level not found',"fail",404))
    level && res.status(201).json({message: 'success',level})
    })
    


export{
    addLevel,
    addImageLevel,
    updateLevel,
    getSingleLevel,
    getAllLevels,
    removeLevel
}


