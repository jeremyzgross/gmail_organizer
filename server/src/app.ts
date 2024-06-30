import express from 'express'
import cors from 'cors'
import { router_home } from './3_Routes/route.home'
import { router_google_auth } from './3_Routes/route.auth_google'

const app = express()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/', router_home)
app.use('/auth/google', router_google_auth)

export default app
