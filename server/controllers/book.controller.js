import Book from "../models/book.model.js";


export async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
} 



export async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find(); // here is our query to find Users
        res.json(allBooks);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); // here is our error response
    }
}


export async function getOneBook(req, res) {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.json(foundBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export async function deleteOneBook(req, res) {
    try {
        const deletedBook= await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

/* export {
    createPerson,
    getAllPeople,
    getOnePerson,
    updateOnePerson,
    deleteOnePerson,
};*/