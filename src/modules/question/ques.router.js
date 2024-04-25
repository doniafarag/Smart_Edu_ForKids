import express from 'express'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import * as controller from './ques.controller.js'
import {fileUpload , fileValidation} from '../../utils/multer.cloud.js'
const quesRouter=express.Router()
quesRouter.route('/')
   .post(controller.addQues)
   .get(controller.getAllQues)
 quesRouter.route('/image/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.image).array('image',5),controller.addImageQues)
quesRouter.route('/:id')
   .patch(controller.updateQues)
   .delete(controller.removeQues)
   .get(controller.getSingleQues)

export default quesRouter


