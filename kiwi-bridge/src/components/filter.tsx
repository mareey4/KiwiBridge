"use client";

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilterOptions) => option.type,
});

export default function Filter() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleDelete = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((item) => item.type !== option.type)
    );
  };

  return (
    <Stack direction="column" spacing={1}>
      <Autocomplete
        id="filter-demo"
        options={typesOfSupport}
        getOptionLabel={(option) => option.type}
        filterOptions={filterOptions}
        sx={{ width: 300 }}
        onChange={(event, newValue) => {
          setSelectedOptions(newValue ? [...selectedOptions, newValue] : selectedOptions);
        }}
        renderInput={(params) => <TextField {...params} label="Custom filter" />}
      />
      <Stack direction="row" spacing={1}>
        {selectedOptions.map((option) => (
          <Chip
            key={option.type}
            label={option.type}
            onDelete={() => handleDelete(option)}
          />
        ))}
      </Stack>
    </Stack>
  );
}

interface FilterOptions {
  type: string;
}

const typesOfSupport = [
  { type: "Emotional Support"},
  { type: "Everyday Things"},
  { type: "Physical Support"}
];
