import express from 'express'

import { addReview, deleteReview, getAllReviews, getSingleReview, updateReview } from './review.controller.js'
import { allowedTo, protectedRouter } from '../auth/auth.controller.js'

const reviewRouter=express.Router()

reviewRouter.route('/')
   .post(protectedRouter,allowedTo('user'), addReview)
   .get(getAllReviews)
reviewRouter.route('/:id')
   .patch(protectedRouter,allowedTo('user'),updateReview)
   .delete(deleteReview)
   .get(getSingleReview)

export default reviewRouter


