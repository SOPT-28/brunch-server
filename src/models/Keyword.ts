import mongoose from "mongoose";
import { IKeyword } from "../interfaces/IKeyword";

const KeywordSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },

});

export default mongoose.model<IKeyword & mongoose.Document>("Keyword", KeywordSchema);
