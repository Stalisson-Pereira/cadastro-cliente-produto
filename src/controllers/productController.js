import Product from "../models/Product.js"
import crypto from "node:path"

export const createProduct = async (req, res) => {

    const productToCreate = {
        id: crypto.randomUUID(),
        ...req.body.name,
        ...req.body.price,
        ...req.body.amount
    }

    const product = await Product.create(userToCreate)

    res.status(201).json(product)
}

export const getAllProduct = (req, res) => {

    res.status(200).json(product)
}

export const updateProduct = (req, res) => {

    res.status(200).json(product)
}

export const deleteProduct = (req, res) => {

    res.status(200).json(product)
}