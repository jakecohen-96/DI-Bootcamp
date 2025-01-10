import { RecipeCollection } from "../model/RecipeCollection";

export class RecipeTemplate {
  private recipeContainer: HTMLElement;

  constructor(private collection: RecipeCollection) {
    this.recipeContainer = document.getElementById("recipeContainer")!;
    document.getElementById("recipeEntryForm")!.addEventListener("submit", (e) => this.handleFormSubmit(e));
    document.getElementById("clearRecipesButton")!.addEventListener("click", () => this.clearRecipes());
    this.render();
  }

  private handleFormSubmit(event: Event): void {
    event.preventDefault();
    const title = (<HTMLInputElement>document.getElementById("recipeTitle")).value.trim();
    const ingredients = (<HTMLTextAreaElement>document.getElementById("ingredients")).value.trim().split("\n");
    const instructions = (<HTMLTextAreaElement>document.getElementById("instructions")).value.trim();

    if (title && ingredients.length && instructions) {
      this.collection.addRecipe(title, ingredients, instructions);
      (<HTMLFormElement>event.target).reset();
      this.render();
    }
  }

  private clearRecipes(): void {
    localStorage.clear();
    this.collection = new RecipeCollection();
    this.render();
  }

  private renderRecipeCard(recipe: any): HTMLElement {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;

    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = recipe.isFavorite ? "Unfavorite" : "Favorite";
    favoriteButton.addEventListener("click", () => {
      this.collection.toggleFavorite(recipe.id);
      this.render();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      this.collection.removeRecipe(recipe.id);
      this.render();
    });

    card.append(favoriteButton, deleteButton);
    return card;
  }

  private render(): void {
    this.recipeContainer.innerHTML = "";
    this.collection.getAllRecipes().forEach((recipe) => {
      const recipeCard = this.renderRecipeCard(recipe);
      this.recipeContainer.appendChild(recipeCard);
    });
  }
}