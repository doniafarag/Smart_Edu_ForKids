import express from 'express'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import * as controller from './typing.controller.js'
import {fileUpload , fileValidation} from '../../utils/multer.cloud.js'
const typingRouter=express.Router()
typingRouter.route('/')
   .post(controller.addTyping)
   .get(controller.getAllQues)
 typingRouter.route('/image/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.image).single('image'),controller.addImageQues)
typingRouter.route('/:id')
   .patch(controller.updateQues)
   .delete(controller.removeQues)
   .get(controller.getSingleQues)

export default typingRouter


