# sequelize-express-findbyid
Find by id using a sequelize model, returning 404 error if not found

## Install
```sh
npm i -S sequelize-express-findbyid
or
npm install --save sequelize-express-findbyid
```

## API

##### `const sef = sequelize-express-findbyid (model[, primaryKey = 'id'])

## Usage

```js
const sef = require(`sequelize-express-findbyid`)
const findById = sef(Model) // Primary key is 'id'
const findByOtherId = sef(Model, 'OtherId') // Primary key is 'OtherId'

router.get('/:id', (req, res, next) => {
  findById(req.params.id).then(result => res.send(result))
    .catch(e => next(e))
})
```

## Full await/async example inside express router

```js
const express = require('express')
const sef = require(`sequelize-express-findbyid`)

const router = express.Router()
const db = require(`./db`) // Your sequelize models
const Model = db.ModelName // Your model
const findById = sef(Model) // Primary key is 'id'

router.get('/:id', async (req, res, next) => {
  res.send(await findById(req.params.id))
})
```

## License
MIT Copyright © [Diego Rodríguez Baquero](https://diegorbaquero.com)