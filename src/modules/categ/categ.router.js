import express from 'express'
import * as controller from './categ.controller.js'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import { fileUpload, fileValidation } from '../../utils/multer.cloud.js'


const categRouter=express.Router()
categRouter.route('/')
   .post(controller.addCateg)
   .get(controller.getAllCategs)
categRouter.route('/image/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.image).single('image'),controller.addImageCateg)
categRouter.route('/audio/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.video).single('video'),controller.addAudioCateg)
categRouter.route('/:id')
   .patch(controller.updateCateg)
   .delete(controller.removeCateg)
   .get(controller.getSingleCateg)

export default categRouter

