import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { router_home } from './3_Routes/route.home'
import { router_google_auth } from './3_Routes/route.auth_google'
import { router_delete_unread } from './3_Routes/route.deleteUnread'

const app = express()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/', router_home)
app.use('/auth/google', router_google_auth)
app.use('/delete/unread', router_delete_unread)

export default app
