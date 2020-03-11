const Joi = require('@hapi/joi')

const validate = {
    body: (schema) => {
        return (req, res, next) => {
            const body = req.body
            const { error, value } = schema.validate(body)
            if(error) return next(error)
            if(!req.ctx) req.ctx = {}
            req.ctx.body = value
            next()
        }
    }
}

module.exports = { Joi, validate }