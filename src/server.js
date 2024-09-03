import express from 'express'
import User from './models/User.js'
import Product from './models/Product.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import userRoutes from './routes.js'
import productsRoutes from './routes.js'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
User.init(sequelize)
Product.init(sequelize)

app.use('/clientes', userRoutes)
app.use('/produtos', productsRoutes)

sequelize
    .authenticate()
    .then(() => {
    console.log("Banco de dados Conectado")
    app.listen(3000, () => {
        console.log("Servidor ON 🚀")
    })
})
    .catch( err => {
        console.error(err)
})

