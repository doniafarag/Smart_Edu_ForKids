import express from 'express'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import * as controller from './match.controller.js'
import {fileUpload , fileValidation} from '../../utils/multer.cloud.js'
const matchingRouter=express.Router()
matchingRouter.route('/')
   .post(controller.addMatching)
   .get(controller.getAllMatching)
matchingRouter.route('/submit').post(controller.Submit)
matchingRouter.route('/image/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.image).array('image',6),controller.addImageMatching)
matchingRouter.route('/:id')
   .patch(controller.updateMatching)
   .delete(controller.removeMatching)
   .get(controller.getSingleMatching)


export default matchingRouter


