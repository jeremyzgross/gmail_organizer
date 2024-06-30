import express from 'express'
import { deleteUnread } from '../2_Controllers/controller.deleteUnread'

const router = express.Router()

// Define as a POST route
router.post('/unread', deleteUnread)

export const router_delete_unread = router
