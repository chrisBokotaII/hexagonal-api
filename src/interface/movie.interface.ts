export interface IMovie {
  title: string;
  description: string;
  cover: string;
  rating: string;
  year: number;
}
export interface MoviesRepository {
  getMovies(): Promise<IMovie[]>;
  getMovie(id: string): Promise<IMovie | null>;
  createMovie(movie: IMovie): Promise<IMovie>;
  updateMovie(id: string, movie: IMovie): Promise<IMovie | null>;
  deleteMovie(id: string): Promise<boolean>;
}
