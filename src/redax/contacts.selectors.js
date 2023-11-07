import { createSelector } from "@reduxjs/toolkit";

const selectContactsStore = state => state;

export const selectContacts = createSelector(
    selectContactsStore,
  state => state.auth.contacts.items
);
export const selectContactsisLoading = createSelector(
    selectContactsStore,
    state => state.auth.contacts.isLoading
);
export const selectContactsError = createSelector(
    selectContactsStore,
    state => state.auth.contacts.error
);
export const selectContactsFilter = createSelector(
    selectContactsStore,
    state => state.auth.filter
);
