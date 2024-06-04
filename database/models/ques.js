// import { array, string } from 'joi';
import mongoose, { Schema, model } from 'mongoose';
const QuesSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:"false"},
   subjectName:{type:String,select:"false"},
   levelId:{type:Schema.Types.ObjectId,ref:"Level",select:"false"},
   levelName:{type:String,select:"false"},
   unitId:{type:Schema.Types.ObjectId,ref:"Unit",select:"false"},
   unitName:{type:String,select:"false"},
   catId:{type:Schema.Types.ObjectId,ref:"Cat",select:"false"},
   lessonName:{type:String},
   quesName:{type:String},
   content:{type:Array,required:true},
   images:[{public_id:String , secure_url:String}],
   answer:{type:String,required:true},
   score:{type:Number,required:true},
   titleOfQues:{type:String,required:true},
});

export const Ques = model('Ques',QuesSchema)