const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);


exports.createUnitSchema = Joi.object({
    name: Joi.string().required(),
    number: Joi.string(),
    phase: Joi.objectId().required(),
    location: Joi.string().required(),
    finished: Joi.bool(),
    delivered: Joi.bool(),
    description: Joi.string(),
});
