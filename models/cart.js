import { Schema, model } from 'mongoose'

const cartSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    items: [{
        itemId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1,
            min: 0,
            max: 100
        }
    }],
    total: {
        type: Number,
        default: 0
    }
})

export default model('Cart', cartSchema)