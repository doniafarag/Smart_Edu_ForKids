import multer from "multer";

import  AppError from "./AppError.js";

export const fileValidation = {
    image : ["image/jpeg", "image/gif" , "image/png"],
    file :['application/pdf' , 'application/msword'],
    video :['audio/mpeg','video/mp4']
}
export function fileUpload(customeValidation=[]){
   
    
    const storage = multer.diskStorage({
      
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
