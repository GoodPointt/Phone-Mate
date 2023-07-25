import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { INewContact } from '../common/utils';

interface ContactsState {
  contacts: INewContact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact(state, action: PayloadAction<INewContact>) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action: PayloadAction<{ contactId: string }>) {
      const { contactId } = action.payload;
      const deletedContactIndex = state.contacts.findIndex(
        contact => contact.id === contactId
      );
      if (deletedContactIndex !== -1) {
        const deletedContactName = state.contacts[deletedContactIndex].name;
        state.contacts.splice(deletedContactIndex, 1);
        toast.info(
          `${deletedContactName} was successfully deleted from your contacts`
        );
      }
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
