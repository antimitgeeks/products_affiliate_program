const Joi = require("joi");




exports.addClickAndPurchases = Joi.object({

    type: Joi.string().required().valid('clicks', 'purchases')


});
exports.getClickAndPurchasesList = Joi.object({

    type: Joi.string().required().valid('clicks', 'purchases'),
    name: Joi.string().optional()


});

