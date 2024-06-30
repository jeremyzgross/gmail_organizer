import express from 'express'
import { Router } from 'express'

import { deleteUnread } from '../2_Controllers/controller.deleteUnread'

const router = Router()

// router.post('/', delteUnread)
router.post('/', deleteUnread)


export const router_delete_unread = router
