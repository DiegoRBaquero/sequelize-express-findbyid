const findById = (model, pk = 'id') => async (id, options = {}) => {
    const opts = Object.assign(options, {where: {[pk]: id}})
    const result = await model.findOne(opts)
    if (result === null) {
      const err = new Error(`${model.name} with ${pk} ${id} does not exist`)
      err.status = 404
      throw err
    }
    return result
  }

module.exports = findById
