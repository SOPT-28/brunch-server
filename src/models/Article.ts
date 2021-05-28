import mongoose from "mongoose";
import { IArticle } from "../interfaces/IArticle";

const ArticleSchema = new mongoose.Schema({
  articleImg: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  writtenBy: {
    type: String,
    required: true,
  },

});

export default mongoose.model<IArticle & mongoose.Document>("Article", ArticleSchema);
