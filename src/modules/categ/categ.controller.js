import { levelModel } from '../../../database/models/levels.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { unitModel } from '../../../database/models/unit.js'
import { catModel } from '../../../database/models/category.js'
import cloudinary from '../../utils/cloudinary.js'


const addCateg= catchError(async(req,res)=>{
   
    const subjectName = req.body.subjectName
    const levelName =req.body.levelName
    const unitName =req.body.unitName
    const unit = await unitModel.findOne({subjectName,levelName,unitName})
    const unitId = unit._id
    const subjectId = unit.subjectId
    const levelId = unit.levelId
    const cat = new catModel({...req.body,subjectId,subjectName,levelId,levelName,unitId,unitName})
    await cat.save()
    res.send(cat)
})

const addImageCateg = catchError(async (req,res,next)=>{
    const imagesResources = [];

    for (const file of req.files) {
      const { public_id, secure_url } = await cloudinary.uploader.upload(
        file.path,
        {
          folder: `smartEducational/categ/${req.params.id}/image`,
        },
      );
  
      imagesResources.push({ public_id, secure_url });
    }
  
    const categ = await catModel.findByIdAndUpdate(
      req.params.id,
      { image: imagesResources },
      { new: true }
    );
    const categ1= await catModel.findById(req.params.id)
    res.json({ message:"Done",categ1 })
    
})

const addAudioCateg = catchError(async (req,res,next)=>{
  const audiosResources = [];

    for (const file of req.files) {
      const { public_id, secure_url } = await cloudinary.uploader.upload(
        file.path,
        {
          folder: `smartEducational/categ/${req.params.id}/audio`,resource_type:"video"
        },
      );
  
     audiosResources.push({ public_id, secure_url });
    }
  
    const categ = await catModel.findByIdAndUpdate(
      req.params.id,
      { video: audiosResources },
      { new: true }
    );
  //   const {public_id , secure_url} = await cloudinary.uploader.upload(
  //       req.file.path,
  //        {folder: `smartEducational/categ/${req.params.id}/audio`,resource_type:"video"}
  //       )
  //  const categ = await catModel.findByIdAndUpdate(req.params.id,
  //   {video:{public_id , secure_url}},
  //   {new:true}) 
    const categ1= await catModel.findById(req.params.id)
    res.json({ message:"Done",categ1})
    
})

const getAllCategs = catchError(async (req,res,next)=>{
//     let apiFeatures = new ApiFeatures( catModel.find(), req.query)
//     .paginate().fields().filter().sort().search()
//   // execute query
// //   const  levels = await apiFeatures.mongooseQuery
//     const query = req.query
//     const  categs = await catModel.find(query)
const queryObj={...req.query};
        const excluded=['page','sort','limit','fields'];
        excluded.forEach(el => delete queryObj[el]);
        const query= catModel.find(queryObj);
        const categs=await query;
    res.status(201).json({message: 'success', categs})
})

const getSingleCateg = catchError(async (req,res,next)=>{
    const categ = await catModel.findById(req.params.id)
    !categ&& next( AppError.Error('categ not found',"faile",404))
    categ&& res.status(201).json({message: 'success',categ})
})

const updateCateg= catchError( async (req,res,next)=>{
    const categ= await catModel.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    // console.log(req.params.id)
    categ&& res.status(201).json({message: 'success',categ})
    !categ&& next( AppError.Error('categ not found',"fail",404))
})

const removeCateg=  catchError( async (req,res,next)=> {
    const categ = await catModel.findByIdAndDelete(req.params.id)
    !categ && next( AppError.Error('categ not found',"fail",404))
    categ && res.status(201).json({message: 'success',categ})
    })
    


export{
    addCateg,
    addImageCateg,
    addAudioCateg,
    updateCateg,
    getSingleCateg,
    getAllCategs,
    removeCateg
}


