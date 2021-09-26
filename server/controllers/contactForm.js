import asyncHandler from 'express-async-handler'
import ContactForm from '../models/contactFormModel.js'

const contactFormSubmit =  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message} = req.body 

    const form = await ContactForm.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        message
    })

    res.status(201).json (form)

})

export {contactFormSubmit}