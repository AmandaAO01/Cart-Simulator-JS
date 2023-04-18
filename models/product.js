import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    amount: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

export default model('Product', productSchema)