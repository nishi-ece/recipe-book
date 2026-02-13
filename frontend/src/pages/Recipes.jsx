import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const filtered = category === "all" ? recipes : recipes.filter(r => r.category === category);

  return (
    <div className="container">
      <h1>Nishi's Recipes</h1>
      <div className="categories">
        {["all","lunch","snacks","dinner","dessert","bakes"].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="recipes-grid">
        {filtered.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)}
      </div>
    </div>
  );
}
