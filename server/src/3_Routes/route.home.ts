import express from 'express'
import { home } from '../2_Controllers/controller.home'

export const router_home = express.Router()

router_home.get('/', home)
