import express from "express";
import { moviesController } from "../controllers/movies.controllers";

const Routes = express.Router();

Routes.get("/", moviesController.getMovies);
Routes.get("/:id", moviesController.getMovie);
Routes.post("/", moviesController.createMovie);
Routes.put("/:id", moviesController.updateMovie);
Routes.delete("/:id", moviesController.deleteMovie);

export default Routes;
