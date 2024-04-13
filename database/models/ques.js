import mongoose, { Schema, model } from 'mongoose';
const QuesSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:false},
   subjectName:{type:String,select:false},
   levelId:{type:Schema.Types.ObjectId,ref:"Level",select:false},
   levelName:{type:String,select:false},
   unitId:{type:Schema.Types.ObjectId,ref:"Unit",select:false},
   unitName:{type:String,select:false},
   catId:{type:Schema.Types.ObjectId,ref:"Cat",select:false},
   catName:{type:String},
   content:{type:String,required:true},
   image:[{type:String,required:false}],
   record:{type:String,required:false},
   answer:{type:String,required:true},
   score:{type:Number,required:true}
  
});

export const Ques = model('Ques',QuesSchema)