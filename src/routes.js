import express from 'express'
import { createUser, getAllUsers, updateUser, deleteUser } from './controllers/userController.js'
import { createProduct, deleteProduct, getAllProduct, updateProduct } from './controllers/ProductController.js'

const router = express.Router()

router.post('/cadastro', createUser, createProduct)
router.get('/todos', getAllUsers, getAllProduct)
router.put('/todos', updateUser, updateProduct)
router.delete('/deletar', deleteUser, deleteProduct)

export default router