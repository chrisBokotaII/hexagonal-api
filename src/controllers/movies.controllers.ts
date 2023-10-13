import { Request, Response } from "express";
import { DbMovieRepository } from "../adapter/secondaryAd";
import { MovieService } from "../core/movie.service";

export class moviesController {
  static async createMovie(req: Request, res: Response) {
    try {
      console.log(req.body);
      const movie = req.body;
      const movieService = new MovieService(new DbMovieRepository());
      const createdMovie = await movieService.createMovie(movie);
      res.status(201).json(createdMovie);
    } catch (error: any) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  static async getMovie(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const movieService = new MovieService(new DbMovieRepository());
      const movie = await movieService.getMovie(id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  static async getMovies(req: Request, res: Response) {
    try {
       
      const movieService = new MovieService(new DbMovieRepository());
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  static async updateMovie(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const movie = req.body;
      const movieService = new MovieService(new DbMovieRepository());
      const updatedMovie = await movieService.updateMovie(id, movie);
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  static async deleteMovie(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const movieService = new MovieService(new DbMovieRepository());
      const deletedMovie = await movieService.deleteMovie(id);
      res.status(200).json(deletedMovie);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}
