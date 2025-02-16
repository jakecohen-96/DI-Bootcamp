import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSelectors';
import TaskList from './TaskList';

const CategorySelector = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);
    const categories = useSelector(selectCategories);

    return (
        <div>
            <h2>Select Category</h2>
            <select onChange={(e) => setSelectedCategory(Number(e.target.value))}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <TaskList categoryId={selectedCategory} />
        </div>
    );
};

export default CategorySelector;