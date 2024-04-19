import mongoose, { Schema, model } from 'mongoose';
const unitSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:false},
   subjectName:{type:String,required:true,select:false},
   levelName:{type:String,required:true,select:false},
   levelId:{type:Schema.Types.ObjectId,ref:"Level",select:false},
   content:{type:String,required:true},
   image:{
      public_id:String , secure_url:String
     },
   unitName:{type:String,required:true},
});

export const unitModel = model('Unit',unitSchema)