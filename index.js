const findById = (model, pk = 'id') => (id, options = {}) =>
  new Promise(async (resolve, reject) => {
    const opts = Object.assign(options, {where: {[pk]: id}})
    const result = await model.findOne(opts)
    if (result === null) {
      const err = new Error(`${model.name} with ${pk} ${id} does not exist`)
      err.status = 404
      reject(err)
    }
    resolve(result)
  })

module.exports = findById
