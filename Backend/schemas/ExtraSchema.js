const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);


exports.ExtraSchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    unit: Joi.objectId().required(),
    status: Joi.string().required(),
    description: Joi.string(),
    lasEdit: Joi.string(),
});
