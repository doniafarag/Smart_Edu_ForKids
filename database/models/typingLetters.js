
import mongoose, { Schema, model } from 'mongoose';
const typingSchema=new Schema({
   subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:false},
   subjectName:{type:String,select:false},
   levelId:{type:Schema.Types.ObjectId,ref:"Level",select:false},
   levelName:{type:String,select:false},
   unitId:{type:Schema.Types.ObjectId,ref:"Unit",select:false},
   unitName:{type:String,select:false},
   catId:{type:Schema.Types.ObjectId,ref:"Cat",select:false},
   // lessonName:{type:String},
   titleOfQues:{type:String},
   text:{type:Array,required:true},
   images:[{public_id:String , secure_url:String}],
   userAnswer:{type:String},
   score:{type:Number,required:true},
});

export const typingLetters = model('typingLetters',typingSchema)