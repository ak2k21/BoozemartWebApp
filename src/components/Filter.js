import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterComponent = () => {
  const [filterValue, setFilterValue] = useState('');

  const filterOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  // Custom renderValue function to display "Filter" instead of "F"
  const renderFilterValue = () => {
    const selectedOption = filterOptions.find((option) => option.value === filterValue);
    return selectedOption ? selectedOption.label : 'Filter';
  };

  return (
    <div className="filter-container">
      <h1>Filter Example</h1>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter-select"
          value={filterValue}
          onChange={handleFilterChange}
          label="Filter"
          renderValue={renderFilterValue} // Use the custom renderValue function
        >
          {filterOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterComponent;
