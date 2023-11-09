import { Button } from '@mui/material';
import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contactsThunk';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <Button
        onClick={() => handleDeleteContact(contact.id)}
        variant="outlined"
        color="error"
        size="small"
      >
        Delete
      </Button>
    </li>
  );
}
