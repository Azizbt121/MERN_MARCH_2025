import booksBD from "../models/book.models";



const bookControllers= {
    create : async(req,res)=>{
        try{
            const newBook=await booksBD.create(req.body)
            res.json(newBook)
        }catch(err){
            throw(err)
        }
    },
    ReadAll: async (req, res) => {
        try {
            const AllBooks = await booksBD.find()
            res.json(AllBooks)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    ReadOne: async (req, res) => {
        try {
            const bookie = await booksBD.findById(req.params.id)
            res.json(bookie)
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    UpdateBook: async (req, res) => {
        const options = {
            new: true,
            runValidation: true
        }
        try {
            const Updatedbook = await booksBD.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(Updatedbook)
        }
        catch (err) {
            console.log(err)
            rres.status(500).json(err)
        }
    },
    DeleteBook: async (req, res) => {
        try {
            await booksBD.findByIdAndDelete(req.params.id)
        }
        catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
}
}


export default bookControllers;