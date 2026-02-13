import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/recipes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
