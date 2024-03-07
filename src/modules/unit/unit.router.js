import express from 'express'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import * as controller from './unit.controller.js'
import { fileUpload, fileValidation } from '../../utils/multer.cloud.js'

const unitRouter=express.Router()
unitRouter.route('/')
   .post(controller.addUnit)
   .get(controller.getAllUnits)
unitRouter.route('/image/:id').patch(protectedRouter,allowedTo('user'),fileUpload(fileValidation.image).single('image'),controller.addImageUnit)
unitRouter.route('/:id')
   .patch(controller.updateUnit)
   .delete(controller.removeUnit)
   .get(controller.getSingleUnit)

export default unitRouter


