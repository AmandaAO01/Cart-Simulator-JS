import {Schema, Types, model} from 'mongoose'

const userSchema = new Schema({
    active: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
})

export default model('User', userSchema)