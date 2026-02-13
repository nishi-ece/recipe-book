import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// Get recipe by ID
router.get("/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
});

// Add new recipe
router.post("/", async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.json(newRecipe);
});

export default router;
