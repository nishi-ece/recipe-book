import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Loading…</p>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>

      <h3>Ingredients:</h3>
      <ul>{recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>

      <h3>Steps:</h3>
      <ol>{recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>

      <p>Cooking Time: {recipe.cookingTime}</p>
    </div>
  );
}
