import mongoose, { Schema, model } from 'mongoose';
const UserSubjectSchema=new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId ,ref:'user'},
    subject: {
        titleOfSub: String,
        levels:[{
            titleOfLevel: String,
            questions: [
                {
                    titleOfQues: 'ques 1',
                    scoreOfQues: { type: Number } // score of original ques after right asnwer 
                },
               
            ],
            scoreOfLevel: { type: Number } // collect the scores of  level

        }]
    },
    scoreOfArabic: { type: Number } // collect the scores of all levels
});

export const subjectModel = model('UserSubjectSchema',UserSubjectSchema)