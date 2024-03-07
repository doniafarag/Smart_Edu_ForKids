import mongoose, { Schema, model } from 'mongoose';
const catSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject"},
   subjectName:{type:String},
   levelId:{type:Schema.Types.ObjectId,ref:"Level"},
   levelName:{type:String,required:true},
   unitId:{type:Schema.Types.ObjectId,ref:"Unit"},
   unitName:{type:String},
   // catName:{type:String},
   catName:{type:String,required:true},
   image:{
      public_id:String , secure_url:String
     },
   video:{
      public_id:String , secure_url:String
     },
  

});

export const catModel = model('Cat',catSchema)