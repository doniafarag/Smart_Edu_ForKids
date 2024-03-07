import multer from "multer";
import fs from 'fs';
import { nanoid } from "nanoid";
import  AppError from "./AppError.js";

export const fileValidation = {
    image : ["image/jpeg", "image/gif" , "image/png"],
    file :['application/pdf' , 'application/msword'],
    video :['audio/mpeg','video/mp4']
}
export function fileUpload(customePath = "general",customeValidation=[]){
    const filePath = `uploads/${customePath}`
    // console.log(fs.existsSync(filePath))
    if(!fs.existsSync(filePath)){
        fs.mkdirSync(filePath,{recursive:true})
    }
    const storage = multer.diskStorage({
        destination :(req,file,cb)=>{
            cb(null,filePath )
        },
        filename: (req , file ,cb)=>{
            console.log ({ DISKName: file});
            const finalName = nanoid() +"_" +file.originalname
            file.finalDest = `${filePath}/${finalName}`
            cb(null,finalName)

        },
    })
    
    function fileFilter (req, file, cb) {
         if (customeValidation.includes(file.mimetype)) {
            cb(null,true)
         } else{
            console.log(file.mimetype)
            cb(AppError.Error("invalid-format","failed" , 400), false)
         }

    }
      
    const upload = multer({ dest:"uploads",fileFilter,storage})
    return upload
}
