const express = require('express')
const cors = require('cors')
const port = 3200

const sequelize = require('./db.config')
sequelize.sync().then(()=> console.log ('database ready'))

const userEndpoint = require('./routes/users')

const app =express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.use('/users', userEndpoint)

app.listen(port, () => console.log(`runing server on port ${port}`))
