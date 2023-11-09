import React from 'react';

import { selectContactsFilter } from 'redax/contacts.selectors';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redax/contactsReduсer';
import { TextField } from '@mui/material';

export default function Filter() {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <TextField
      value={filter}
      onChange={handleFilter}
      margin="normal"
      name="filter"
      label="Find contacts by name"
      type="text"
      id="filter"
    />
  );
}
