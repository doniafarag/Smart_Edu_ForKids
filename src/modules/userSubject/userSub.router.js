import express from 'express'

import { allowedTo, protectedRouter } from '../auth/auth.controller.js'
import {addScorOFSub} from './userSub.controller.js'

const userSubRouter=express.Router()

userSubRouter.post("/addScore/:id",addScorOFSub)
export default userSubRouter
