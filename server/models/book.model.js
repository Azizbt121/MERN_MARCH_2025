import { Schema, model } from "mongoose";

const bookSchema = new Schema(
    {
        title: {
            type : String,
            required :[true,'Title is required'],
            minLength:[5,'Title must be at least 5 caraceters'],
            maxLength:[255,"Check the Title's length"]

        },

        author: {
            type : String,
            required :[true,'Author is required'],
            minLength:[5,'Naùe must be at least 5 caraceters'],
            maxLength:[255,"Check the name's length"]
        },

        pages: {
            type : Number,
            required :[true,'Title is required'],
            min:[1,"Check the page numbers"]
        },
        isAvailable: {
            type : Boolean,
            default :false
        }
        
    },

    {timestamps:true}
)

const Book= model("Book", bookSchema)
export default Book; 