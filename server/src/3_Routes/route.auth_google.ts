import express from 'express'
import { Router } from 'express'
import {
  authGoogle,
  oauth2callback,
} from '../2_Controllers/controller.auth_google'

const router = Router()

router.get('/', authGoogle)
router.get('/oauth2callback', oauth2callback)

export const router_google_auth = router
