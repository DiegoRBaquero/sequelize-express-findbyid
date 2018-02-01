const findById = (model, pk = 'id') => async (id, options = {}) => {
  if (!options.where) options.where = {}
  Object.assign(options.where, {[pk]: id})
  const result = await model.findOne(options)
  if (result === null) {
    const err = new Error(`${model.name} with ${pk} ${id} does not exist`)
    err.status = 404
    throw err
  }
  return result
}

module.exports = findById
