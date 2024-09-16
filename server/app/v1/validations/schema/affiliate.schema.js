const Joi=require("joi");

exports.addAffiliateSchema=Joi.object({
    name:Joi.string().required(),
    link:Joi.string().required(),
    dropboxLink:Joi.string().required(),
    clickCount:Joi.string().optional(),
    purchases:Joi.string().optional(),

})
