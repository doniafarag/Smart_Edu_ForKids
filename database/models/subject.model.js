import { Schema, model } from 'mongoose';
const subjectSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
     },
     image:{
      public_id:String , secure_url:String
     },
     video:{
        public_id:String , secure_url:String
       },
});

export const subjectModel = model('subject',subjectSchema)