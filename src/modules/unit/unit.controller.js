import { levelModel } from '../../../database/models/levels.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { unitModel } from '../../../database/models/unit.js'
import cloudinary from '../../utils/cloudinary.js'


const addUnit= catchError(async(req,res)=>{
   
    const subjectName = req.body.subjectName
    const levelName =req.body.levelName
    const level = await levelModel.findOne({subjectName,levelName})
    const levelId = level._id
    const subjectId = level.subjectId
    
    const unit = new unitModel({...req.body,subjectId,subjectName,levelId,levelName})
    await unit.save()
    res.send(unit)
})

const addImageUnit = catchError(async (req,res,next)=>{
    const {public_id , secure_url} = await cloudinary.uploader.upload(
        req.file.path,
        {folder: `smartEducational/unit/${req.params.id}/image`},
        )
   const unit = await unitModel.findByIdAndUpdate(req.params.id,
    {image:{public_id , secure_url}},
    {new:true})
    const unit1= await unitModel.findById(req.params.id)
    res.json({ message:"Done",unit1,file:req.file })
    
})

const getAllUnits = catchError(async (req,res,next)=>{
    let apiFeatures = new ApiFeatures( unitModel.find(), req.query)
    .paginate().fields().filter().sort().search()
  // execute query
//   const  levels = await apiFeatures.mongooseQuery
    const query = req.query
    const  units = await unitModel.find(query)
    res.status(201).json({message: 'success',page:apiFeatures.page , units})
})

const getSingleUnit = catchError(async (req,res,next)=>{
    const unit = await unitModel.findById(req.params.id)
    !unit&& next( AppError.Error('unit not found',"faile",404))
    unit&& res.status(201).json({message: 'success',unit})
})

const updateUnit= catchError( async (req,res,next)=>{
    const unit= await unitModel.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    // console.log(req.params.id)
    unit&& res.status(201).json({message: 'success',unit})
    !unit&& next( AppError.Error('unit not found',"fail",404))
})

const removeUnit =  catchError( async (req,res,next)=> {
    const unit = await unitModel.findByIdAndDelete(req.params.id)
    !unit && next( AppError.Error('unit not found',"fail",404))
    unit && res.status(201).json({message: 'success',unit})
    })
    


export{
    addUnit,
    addImageUnit,
    updateUnit,
    getSingleUnit,
    getAllUnits,
    removeUnit
}


