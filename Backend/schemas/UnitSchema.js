const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);


exports.createUnitSchema = Joi.object({
    name: Joi.string().required(),
    number: Joi.string(),
    phase: Joi.objectId().required(),
    finished: Joi.bool(),
    delivered: Joi.bool(),
});
