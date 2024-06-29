
import { options } from 'joi';
import mongoose, { Schema, model } from 'mongoose';
// const MatchSchema=new Schema({
//     subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:false},
//     subjectName:{type:String,select:false},
//     levelId:{type:Schema.Types.ObjectId,ref:"Level",select:false},
//     levelName:{type:String,select:false},
//     unitId:{type:Schema.Types.ObjectId,ref:"Unit",select:false},
//     unitName:{type:String,select:false},
//     catId:{type:Schema.Types.ObjectId,ref:"Cat",select:false},
//     // lessonName:{type:String},
//     // MatchName:{type:String},
//     id: {type: Number},
//     question:{type: String},
//     options:[
//         {letter:{type: String}},
//         { images:{public_id:String , secure_url:String}}
//     ],
//     correctAnswers:{
//         letter:{type: String},
//         images:{public_id:String , secure_url:String}
//     }

//  });

const optionSchema = new Schema({
    name :{type: String},
    img:{public_id:String , secure_url:String}
})

const MatchQuestionSchema=new Schema({
    subjectId:{type:Schema.Types.ObjectId,ref:"subject",select:false},
    subjectName:{type:String,select:false},
    levelId:{type:Schema.Types.ObjectId,ref:"Level",select:false},
    levelName:{type:String,select:false},
    unitId:{type:Schema.Types.ObjectId,ref:"Unit",select:false},
    unitName:{type:String,select:false},
    catId:{type:Schema.Types.ObjectId,ref:"Cat",select:false},
    // lessonName:{type:String},
    question:{type: String},
    letters:[String],
    options:[optionSchema],
    correctOptions:[
        {
            letter:{type: String},
            optionId:{type:Schema.Types.ObjectId},
        }
    ]
    

 });
 
 export const MatchQuestion= model('MatchQuestion',MatchQuestionSchema)