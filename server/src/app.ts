import express from 'express'
import cors from 'cors'
import { router_home } from './3_Routes/route.home'

const app = express()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/', router_home)

export default app
