import express from 'express'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import * as controller from './subject.controller.js'
import {fileUpload , fileValidation} from '../../utils/multer.cloud.js'

const subjectRouter=express.Router()

subjectRouter.route('/')
   .post(protectedRouter,allowedTo('user'),controller.addSubject)
   .get(controller.getAllSubjects)
subjectRouter.route('/image/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.image).single('image'),controller.addImageSubject)
subjectRouter.route('/audio/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.video).single('video'),controller.addAudioSubject)
subjectRouter.route('/:id')
   .patch(controller.updateSubject)
   .delete(controller.removeSubject)
   .get(controller.getSingleSubject)

export default subjectRouter


