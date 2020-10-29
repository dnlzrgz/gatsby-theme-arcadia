exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    sectionsPath: Joi.string().required(),
  })
}
