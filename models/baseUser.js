import {Schema, model} from 'mongoose'

const baseUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

export default model('BaseUser', baseUserSchema)