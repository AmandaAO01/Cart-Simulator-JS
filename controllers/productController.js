import Product from '../models/product.js'

export const createProduct = async (req, res) => {
    const {name, price, amount, desc} = req.body
    try {
        const newProduct = new Product({
            name,
            price,
            amount,
            desc
        })
        await newProduct.save()
        return res.status(201).json({message:'Creado con éxito'})
    } catch (error) {
        return res.status(400).json({message:'Error al guardar'})
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).send(products)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const searchProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({message:'Producto no existe'})
        }
        return res.status(200).send(product)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const updateProduct = async (req, res) => {
    try {
        let body = req.body
        const modifiedProduct = await Product.findByIdAndUpdate(req.params.id, {name: body.name, price: body.price, amount: body.amount, desc: body.desc}, {new: true})
        if (!modifiedProduct) {
            return res.status(404).json({message:'Producto no existente'})
        }
        return res.status(200).send(modifiedProduct)
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndUpdate(req.params.id, {active: false})
        if (!deletedProduct) {
            return res.status(404).json({message:'Producto no existente'})            
        }
        return res.status(200).json({message:'Eliminado con éxito'})
    } catch (error) {
        return res.status(400).json({message:'No se pudo encontrar'})
    }
}