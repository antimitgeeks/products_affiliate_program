const Joi=require('joi')
exports.createInvoiceSchema=Joi.object({
    themeName:Joi.string().required(),
    userId:Joi.number().integer().required(),
    domain:Joi.string().required(),
    commission:Joi.number().integer().required()
})


exports.updateStatuSchema=Joi.object({
   status:Joi.string().required().valid()
})
