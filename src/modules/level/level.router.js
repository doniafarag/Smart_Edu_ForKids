import express from 'express'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import * as controller from './level.controller.js'
import { fileUpload, fileValidation } from '../../utils/multer.cloud.js'

const levelRouter=express.Router()

levelRouter.route('/')
   .post(protectedRouter,allowedTo('user'),controller.addLevel)
   .get(controller.getAllLevels)
levelRouter.route('/image/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.image).single('image'),controller.addImageLevel)
levelRouter.route('/:id')
   .patch(controller.updateLevel)
   .delete(controller.removeLevel)
   .get(controller.getSingleLevel)

export default levelRouter

