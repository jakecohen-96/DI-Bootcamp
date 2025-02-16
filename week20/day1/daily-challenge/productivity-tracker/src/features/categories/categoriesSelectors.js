export const selectCategories = (state) => state.categories.categories;
export const selectCategoryById = (state, categoryId) =>
    state.categories.categories.find(category => category.id === categoryId);