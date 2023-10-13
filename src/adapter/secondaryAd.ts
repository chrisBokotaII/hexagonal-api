import { IMovie, MoviesRepository } from "../interface/movie.interface";
import Movie, { iMovieModel } from "../models/user.model";

export class DbMovieRepository implements MoviesRepository {
  async getMovies() {
    const movies = await Movie.find().sort({ createdAt: -1 });
    return movies;
  }
  async getMovie(id: string) {
    const movie = await Movie.findById(id);
    return movie;
  }
  async createMovie(movie: IMovie) {
    const createdMovie = await Movie.create(movie);

    return createdMovie;
  }
  async updateMovie(id: string, movie: iMovieModel) {
    const found = await Movie.findById(id);
    if (!found) return null;
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: id },
      {
        title: movie.title,
        description: movie.description,
        cover: movie.cover,
        rating: movie.rating,
        year: movie.year,
      },
      { new: true }
    );
    return updateMovie;
  }
  async deleteMovie(id: string) {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    return deletedMovie ? true : false;
  }
}
