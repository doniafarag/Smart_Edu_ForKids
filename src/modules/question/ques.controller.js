import { levelModel } from '../../../database/models/levels.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { unitModel } from '../../../database/models/unit.js'
import { Ques } from '../../../database/models/ques.js'
import { catModel } from '../../../database/models/category.js'
import cloudinary from '../../utils/cloudinary.js'


const addQues= catchError(async(req,res)=>{
   
    const subjectName = req.body.subjectName
    const levelName =req.body.levelName
    const unitName =req.body.unitName
    const lessonName = req.body.lessonName
    const cat = await catModel.findOne({subjectName,levelName,unitName,lessonName})
    // if(!cat) return new ( AppError.Error('cat not found' ,"failed", 409))
    const catId = cat._id
    const subjectId = cat.subjectId
    const levelId = cat.levelId
    const unitId = cat.unitId
    const ques = new Ques({...req.body,subjectId,subjectName,levelId,levelName,unitId,unitName,lessonName,catId})
    await ques.save()
    res.send(ques)
    // !ques&& new( AppError.Error('ques not found',"faile",404))
    // ques&& res.status(201).json({message: 'success',ques})
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
  
    const ques = await Ques.findByIdAndUpdate(
      req.params.id,
      { images: imagesResources },
      { new: true }
    );
    const ques1= await Ques.findById(req.params.id)
    res.json({ message:"Done",ques1 })
})

const getAllQues = catchError(async (req,res,next)=>{
    let apiFeatures = new ApiFeatures( levelModel.find(), req.query)
    .paginate().fields().filter().sort().search()
  // execute query
//   const  levels = await apiFeatures.mongooseQuery
    const query = req.query
    const  units = await unitModel.find(query)
    res.status(201).json({message: 'success',page:apiFeatures.page , units})
    // console.log(req.params);
    // let filter = {}
    // if(req.params.subject){
    //    filter={subject:req.params.subject}
    // }
    // const levels = await levelModel.find(filter)
    // res.status(201).json({message: 'success',levels})
})

const getSingleQues = catchError(async (req,res,next)=>{
    const ques = await Ques.findById(req.params.id)
    !ques&& next( AppError.Error('ques not found',"faile",404))
    ques&& res.status(201).json({message: 'success',ques})
})

const updateQues= catchError( async (req,res,next)=>{
    const ques= await Ques.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    // console.log(req.params.id)
    ques&& res.status(201).json({message: 'success',ques})
    !ques&& next( AppError.Error('ques not found',"fail",404))
})

const removeQues =  catchError( async (req,res,next)=> {
    const ques = await Ques.findByIdAndDelete(req.params.id)
    !ques && next( AppError.Error('ques not found',"fail",404))
    ques && res.status(201).json({message: 'success',ques})
    })
    


export{
    addQues,
    addImageQues,
    updateQues,
    getSingleQues,
    getAllQues,
    removeQues
}


