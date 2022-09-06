const basejoi = require("joi");
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
  type: "string",
  base: joi.string(),
  messages: {
    'string.escapeHtml': '{{#label}} must not contain HTML',
  },
  rules: {
    escapeHtml: {
      validate: (value, helpers) => {
        const clean = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        });
        if(clean === value) {
          return value;
        }
        return helpers.error('string.escapeHtml', { value });
      },
    },
  },
});

const joi = basejoi.extend(extension);


module.exports.PropertySchema = joi.object({
  property: joi
    .object({
      title: joi.string().required().escapeHtml(),
      sellingType: joi.string().required().escapeHtml(),
      price: joi.number().required().min(0),
      propertyType: joi.string().required().escapeHtml(),
      propertySize: joi.string().required().escapeHtml(),
      description: joi.string().required().escapeHtml(),
      rooms: joi.number(),
      rentType: joi.string().escapeHtml(),

    })
    .required(),
    deleteImages: joi.array(),
});
