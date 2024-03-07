import { levelModel } from '../../../database/models/levels.model.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { unitModel } from '../../../database/models/unit.js'
import { Ques } from '../../../database/models/ques.js'
import { catModel } from '../../../database/models/category.js'



const addQues= catchError(async(req,res)=>{
   
    const subjectName = req.body.subjectName
    const levelName =req.body.levelName
    const unitName =req.body.unitName
    const catName = req.body.catName
    const cat = await catModel.findOne({subjectName,levelName,unitName,catName})
    if(!cat) return next ( AppError.Error('cat not found' ,"failed", 409))
    const catId = cat._id
    const subjectId = cat.subjectId
    const levelId = cat.levelId
    const unitId = cat.unitId
    const ques = new Ques({...req.body,subjectId,subjectName,levelId,levelName,unitId,unitName,catName,catId})
    await ques.save()
    !ques&& next( AppError.Error('ques not found',"faile",404))
    ques&& res.status(201).json({message: 'success',ques})
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
    updateQues,
    getSingleQues,
    getAllQues,
    removeQues
}


