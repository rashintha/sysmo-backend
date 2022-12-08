import { Router } from "express";
import core from './../controllers/core.controller.js'

const router = Router()

router.use('/', core)

export default router