import mongoose, { Schema, model } from 'mongoose';
const levelSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:false},
   subjectName:{type:String,select:false},
   levelName:{type:String,required:true},
   image:{
      public_id:String , secure_url:String
     },
   scoreOfLevel:{type:Number,required:true},


});

export const levelModel = model('Level',levelSchema)