import bookControllers from "../controllers/controllers.js";
import {Router} from 'express';


const routers = Router()

routers.route("/books")
    .post(bookControllers.create)
    .get(bookControllers.ReadAll)

routers.route("/books/:id")
    .get(bookControllers.ReadOne)
    .put(bookControllers.UpdateBook)
    .delete(bookControllers.DeleteBook)









export default routers;
