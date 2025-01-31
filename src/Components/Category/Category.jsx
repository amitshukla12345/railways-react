import React, { useState } from 'react';
import { addCategory } from './CategoryService'; 


function Category() {
  const [category, setCategory] = useState('');

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (category) {
      alert(`Category "${category}" added successfully!`);
      // You can handle further logic, such as saving the category to a backend here
      setCategory(''); // Reset the category selection
    } else {
      alert('Please select a category');
    }
  };

  return (
    <div>
      <div id="category-section">
        <div className="category-form">
          <h2>Add Category</h2>

          {/* Category Name */}
          <label htmlFor="category-name">Category Name:</label>
          <select
            id="category-name"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>Select Category</option>
            <option value="Tatkal">Tatkal</option>
            <option value="Sleeper">Sleeper</option>
            <option value="General">General</option>
            <option value="First Class">First Class</option>
            <option value="AC 3 Tier">AC 3 Tier</option>
          </select>

          {/* Submit Button */}
          <button id="add-category-btn" onClick={handleSubmit}>
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
