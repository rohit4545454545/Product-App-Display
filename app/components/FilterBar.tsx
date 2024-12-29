import React from 'react';

interface FilterBarProps {
  categories: string[]; // Category ko list
  selectedCategory: string | null; // Chhanna ko category
  onCategoryChange: (category: string) => void; // Category change garne function
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Category haru ko list dekhaune */}
      {categories.map((category) => (
        <label key={category} className="flex items-center gap-2">
          <input
            type="radio" 
            name="category" 
            value={category} 
            checked={selectedCategory === category} // Check garne
            onChange={() => onCategoryChange(category)} // Category select garda change garne
            className="form-radio text-blue-500" // Styling
          />
          {category} {/* Category ko naam */}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
