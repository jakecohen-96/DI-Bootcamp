import { RecipeItem } from "./RecipeItem";

export class RecipeCollection {
  private recipes: RecipeItem[];

  constructor() {
    this.recipes = [];
    this.loadFromLocalStorage();
  }

  addRecipe(title: string, ingredients: string[], instructions: string): void {
    const recipe = new RecipeItem(title, ingredients, instructions);
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find(recipe => recipe.id === id);
    if (recipe) {
      recipe.toggleFavorite();
      this.saveToLocalStorage();
    }
  }

  getAllRecipes(): RecipeItem[] {
    return this.recipes;
  }

  saveToLocalStorage(): void {
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  loadFromLocalStorage(): void {
    const data = localStorage.getItem("recipes");
    if (data) {
      const parsedRecipes = JSON.parse(data);
      this.recipes = parsedRecipes.map((recipe: any) => {
        const newRecipe = new RecipeItem(
          recipe.title,
          recipe.ingredients,
          recipe.instructions,
          recipe.isFavorite
        );
        newRecipe.id = recipe.id;
        return newRecipe;
      });
    }
  }
}