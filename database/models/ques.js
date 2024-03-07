import mongoose, { Schema, model } from 'mongoose';
const QuesSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject"},
   subjectName:{type:String},
   levelId:{type:Schema.Types.ObjectId,ref:"Level"},
   levelName:{type:String},
   unitId:{type:Schema.Types.ObjectId,ref:"Unit"},
   unitName:{type:String},
   catId:{type:Schema.Types.ObjectId,ref:"Cat"},
   catName:{type:String},
   content:{type:String,required:true},
   image:[{type:String,required:false}],
   record:{type:String,required:false},
   answer:{type:String,required:true},
   score:{type:Number,required:true}
  
});

export const Ques = model('Ques',QuesSchema)