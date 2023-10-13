import mongoose, { Document, Schema } from "mongoose";
import { IMovie } from "../interface/movie.interface";
export interface iMovieModel extends IMovie, Document {}

const movieSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<iMovieModel>("Movie", movieSchema);
