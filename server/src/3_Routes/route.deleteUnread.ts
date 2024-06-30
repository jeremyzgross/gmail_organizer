import express from 'express'
import { Router } from 'express'

import { delteUnread } from '../2_Controllers/controller.deleteUnread'

const router = Router()

router.post('/', delteUnread)

export const router_delete_unread = router
