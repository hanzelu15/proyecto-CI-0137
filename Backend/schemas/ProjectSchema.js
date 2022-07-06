const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);


exports.createProjectSchema = Joi.object({
    name: Joi.string().required(),
    manager: Joi.objectId().required(),
    location: Joi.string().required(),
    description: Joi.string(),
});
