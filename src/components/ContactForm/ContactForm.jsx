import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redax/contactsThunk';
import { selectContacts } from 'redax/contacts.selectors';
import { setFilter } from 'redax/contactsReduсer';

import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = newContact => {
    const isDublicate = contacts.some(
      contact => contact.name === newContact.name
    );
    if (isDublicate) {
      window.alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    dispatch(setFilter(''));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          margin="normal"
          required
          name="name"
          label="Name"
          type="text"
          id="name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <TextField
          margin="normal"
          required
          name="number"
          label="Number"
          type="text"
          id="number"
          {...register('number', { required: true })}
        />
      </div>

      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
