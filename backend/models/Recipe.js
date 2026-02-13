import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,       // short summary like The Lunch Break
  ingredients: [String],
  steps: [String],
  category: String,          // e.g., lunch, snacks, dinner, bakes
  image: String,
  cookingTime: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
