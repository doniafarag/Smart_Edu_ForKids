import mongoose, { Schema, model } from 'mongoose';
const unitSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject"},
   subjectName:{type:String,required:true},
   levelName:{type:String,required:true},
   levelId:{type:Schema.Types.ObjectId,ref:"Level"},
   content:{type:String,required:true},
   image:{
      public_id:String , secure_url:String
     },
   unitName:{type:String,required:true},
});

export const unitModel = model('Unit',unitSchema)