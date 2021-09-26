import express from 'express'
const router = express.Router()

import {contactFormSubmit} from '../controllers/contactForm.js'

router.route('/').post(contactFormSubmit)

export default router
