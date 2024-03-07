import  { Schema,model } from "mongoose";

const reviewSchema = new Schema({
    text:{
       type:String,
       trim:true,
    },
    user:{
        type:Schema.ObjectId,
        ref:'user',
        required:true
    },
   subject:{
        type:Schema.ObjectId,
        ref:'subject',
        required:true
    },
    rate:{
        type:Number,
        min:[ 1,"Rate must be greater than 0"],
        max: [5],
    }
 
},{timestamps:true})

export const reviewModel = model('review',reviewSchema)