import  AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import { reviewModel } from '../../../database/models/review.model.js'


const addReview= catchError(async (req,res,next)=>{
    req.body.user=req.user._id
    let isReview = await reviewModel.findOne({ user:req.user._id,subject:req.body.subject})
    if (isReview) return next( AppError.Error('you created review before',"faild",409))
    const Review= new reviewModel(req.body)
    await Review.save()
    res.status(201).json({message: 'success',Review})
})

const getAllReviews = catchError(async (req,res,next)=>{
    let apiFeatures = new ApiFeatures( reviewModel.find(), req.query)
    .paginate().fields().filter().sort().search()
  const  Reviews = await apiFeatures.mongooseQuery.populate('subject').lean()
  Reviews.forEach((elm)=>{
    delete elm?.subject?.reviews
  })
  res.status(201).json({message: 'success',page:apiFeatures.page , Reviews})
})

const getSingleReview = catchError(async (req,res,next)=>{
    const Reviews = await reviewModel.findById(req.params.id)
    res.status(201).json({message: 'success',Reviews})
})

const updateReview= catchError( async (req,res,next)=>{
    const Review= await reviewModel.findOneAndUpdate({user:req.user._id ,_id:req.params.id}, req.body,{new:true})
    Review&& res.status(201).json({message: 'success',Review})
    !Review&& next( AppError.Error('Review not found',404))
})


const deleteReview =  catchError( async (req,res,next)=> {
    const review = await reviewModel.findByIdAndDelete(req.params.id)
    !review && next( AppError.Error('review not found',"failed",404))
    review && res.status(201).json({message: 'success',review})
    })



export{
    addReview,
    getAllReviews,
    getSingleReview,
    deleteReview,
    updateReview,
}


