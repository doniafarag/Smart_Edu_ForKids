import express from 'express'

import * as controller from './leeter.controller.js'
const letterRouter=express.Router()
letterRouter.route('/english').get(controller.getEnglishLetters)
letterRouter.route('/arabic').get(controller.getArabicLetters)
letterRouter.route('/numbers').get(controller.getNumbers)


export default letterRouter


