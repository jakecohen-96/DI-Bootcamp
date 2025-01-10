import { RecipeCollection } from "./model/RecipeCollection";
import { RecipeTemplate } from "./templates/RecipeTemplate";

const recipeCollection = new RecipeCollection();
new RecipeTemplate(recipeCollection);

