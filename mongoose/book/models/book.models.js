import {model, Schema} from 'mongoose';

const Book = new Schema({
    Title:{
        type: String,
        required: [true, "Book's title is a must!"],
        minlength: [2, "Title must be at least 2 characters long!"],
        maxlength: [255, "Title must be less than 255 characters long"]

    },
    Author:{
        type: String,
        required: [true, "How can we find it without a name !"],
        minlength: [5, "Do you know a name with two letters!"],
        maxlength: [255, "Why would you go that far"]
    },
    Pages:{
        required: [true, "How can we find it without a name !"],
        minlength: [1, "Honnestly why don't you write it"],
    },
    Isavailable:{
        type: Boolean,
        default: false 
    }
    },
    { timestamps: true }
);


const booksDB = model("Book", PersonSchema);
export default booksBD;