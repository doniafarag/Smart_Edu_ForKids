import express from 'express'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import * as controller from './ques.controller.js'

const quesRouter=express.Router()
quesRouter.route('/')
   .post(controller.addQues)
   .get(controller.getAllQues)
quesRouter.route('/:id')
   .patch(controller.updateQues)
   .delete(controller.removeQues)
   .get(controller.getSingleQues)

export default quesRouter


