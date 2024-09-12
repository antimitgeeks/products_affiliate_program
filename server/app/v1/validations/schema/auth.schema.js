const Joi = require("joi");
const { NPO_TYPE } = require('../../constants/enum')

const emailSchema = Joi.string().email().required()

exports.loginSchema = Joi.object({
    email: emailSchema.required(),
    password: Joi.string().min(6).required(),

});
exports.updatePassword = Joi.object({
    oldPassword: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required()
})

exports.registerSchema = Joi.object({
    email: emailSchema.required(),
    password: Joi.string().min(6).required(),
    paypalAddress: Joi.string().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    address: Joi.string().optional(),
    companyName: Joi.string().optional(),
    companyNumber: Joi.number().optional(),
    companyUrl: Joi.string().optional(),
    phone: Joi.number().max(10).optional(),
    role: Joi.string().valid('Admin', 'User').optional(),
    isActive: Joi.boolean().optional()
});

exports.resetPasswordSchema = Joi.object({
    password: Joi.string().min(6).required(),
});

exports.forgotPasswordSchema = Joi.object({
    email: emailSchema.required(),
})
exports.updateProfile = Joi.object({

    password: Joi.string().min(6).optional(),
    paypalAddress: Joi.string().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    address: Joi.string().optional(),
    companyName: Joi.string().optional(),
    companyNumber: Joi.number().optional(),
    companyUrl: Joi.string().optional(),
    phone: Joi.number().max(10).optional(),
    role: Joi.string().valid('Admin', 'User').optional(),
    isActive: Joi.boolean().optional()
})

exports.listSchema = Joi.object({
    limit: Joi.number().optional(),
    offset: Joi.number().optional(),
})

exports.idSchema = Joi.object({
    id: Joi.number().required(),
})

exports.npoImageTypeSchema = Joi.object({
    type: Joi.valid(NPO_TYPE.LOGO, NPO_TYPE.BANNER, NPO_TYPE.TEXT).required()
})