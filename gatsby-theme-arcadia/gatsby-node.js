exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    sectionsPath: Joi.string().required(),
    githubToken: Joi.string().required(),
  })
}
