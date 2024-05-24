import express from 'express'
import dotenv from 'dotenv'
import { bootstrap } from './src/bootstrap.js'

dotenv.config()
const app = express()
const port =  5000
app.use(express.json())
app.use("/uploads",express.static('./uploads'))
bootstrap(app)
// if(process.env.PRODUCTION === "true") return app.listen(port, () => console.log(`production link ${process.env.PRODUCTION_LINK}`))
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
