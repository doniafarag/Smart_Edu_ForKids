import mongoose, { Schema, model } from 'mongoose';
const catSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:false },
   subjectName:{type:String,select:false },
   levelId:{type:Schema.Types.ObjectId,ref:"Level",select:false},
   levelName:{type:String,required:true,select:false},
   unitId:{type:Schema.Types.ObjectId,ref:"Unit",select:false},
   unitName:{type:String,select:false},
   lessonName:{type:String,required:true},
   text:{type:String},
   image:{
      public_id:String , secure_url:String
     },
   video:{
      public_id:String , secure_url:String
   },
  

});

export const catModel = model('Cat',catSchema)