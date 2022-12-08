import { Router } from 'express'
import core from './../core/router/router.js'

const router = Router()

router.use('/', core)

export default router
