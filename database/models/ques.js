// import { array, string } from 'joi';
import mongoose, { Schema, model } from 'mongoose';
const QuesSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject"},
   subjectName:{type:String},
   levelId:{type:Schema.Types.ObjectId,ref:"Level"},
   levelName:{type:String},
   unitId:{type:Schema.Types.ObjectId,ref:"Unit"},
   unitName:{type:String},
   catId:{type:Schema.Types.ObjectId,ref:"Cat"},
   lessonName:{type:String},
   quesName:{type:String},
   content:{type:Array,required:true},
   images:[{public_id:String , secure_url:String}],
   answer:{type:String,required:true},
   score:{type:Number,required:true},
   titleOfQues:{type:String,required:true},
});

export const Ques = model('Ques',QuesSchema)