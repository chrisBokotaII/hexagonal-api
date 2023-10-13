import { IMovie, MoviesRepository } from "../interface/movie.interface";

export class MovieService {
  constructor(private movieRepository: MoviesRepository) {}
  createMovie(movie: IMovie) {
    return this.movieRepository.createMovie(movie);
  }
  getMovies() {
    return this.movieRepository.getMovies();
  }
  getMovie(id: string) {
    return this.movieRepository.getMovie(id);
  }
  updateMovie(id: string, movie: IMovie) {
    return this.movieRepository.updateMovie(id, movie);
  }
  deleteMovie(id: string) {
    return this.movieRepository.deleteMovie(id);
  }
}
