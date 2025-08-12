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
    },

    storage: {
        type: Number,
    },

    price: {
        type: Number,
        required: [true, "price is required"]
    },

    imgUrl: {
        type: String,
        requiried: [true, "img is required"]
    }


})

export const phonesModel = model("phones", phonesSchema)