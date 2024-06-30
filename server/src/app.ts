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

app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`)
  next()
})
// Routes
app.use('/home', router_home)
app.use('/auth/google', router_google_auth)
app.use('/delete', router_delete_unread) // Ensure the route is correct

export default app
