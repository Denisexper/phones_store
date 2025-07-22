import { model, Schema } from "mongoose";
import { phonesInterface } from "../interfaces/phoneInterface";


const phonesSchema = new Schema<phonesInterface>({
    name: {
        type: String,
        required: [true, "name is required"]
    },

    model: {
        type: String,
        required: [true, "model is required"]
    },

    ram: {
        type: Number,
        required: [true, "ram is required"]
    },

    storage: {
        type: Number,
        required: [true, "storage is required"]
    },

    price: {
        type: Number,
        required: [true, "price is required"]
    },

    imgUrl: {
        type: String,
        requried: [true, "img is required"]
    }


})

export const phonesModel = model("phones", phonesSchema)