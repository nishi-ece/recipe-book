import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image || "placeholder.jpg"} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description.slice(0, 100)}…</p>
      <Link to={`/recipe/${recipe._id}`}>Read More</Link>
    </div>
  );
}
