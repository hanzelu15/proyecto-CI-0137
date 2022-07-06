const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);


exports.createPhaseSchema = Joi.object({
    name: Joi.string().required(),
    project: Joi.objectId().required(),
    location: Joi.string().required(),
    description: Joi.string(),
});
