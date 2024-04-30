import mongoose, { Schema, model } from 'mongoose';
const UserSubjectSchema=new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId ,ref:'user'},
    subject: {type: String,},
    levels:[{
        titleOfLevel: String,
        questions: [
            {
                titleOfQues: String,
                scoreOfQues: { type: Number } // score of original ques after right asnwer 
            },
           
        ],
        scoreOfLevel: { type: Number } // collect the scores of  level

    }],
    scoreOfSubject: { type: Number } // collect the scores of all levels
});

export const subjectModel = model('UserSubjectSchema',UserSubjectSchema)