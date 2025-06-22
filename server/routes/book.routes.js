import { createBook, getAllBooks, getOneBook, deleteOneBook } from "../controllers/book.controller.js";
import { Router } from "express";


const router=Router();


router.route('/book/create').post(createBook)
router.route('/book/getAll').get(getAllBooks)
router.route('/book/getOne/:id').get(getOneBook)
router.route('/book/deleteOne/:id').delete(deleteOneBook)


export default router;