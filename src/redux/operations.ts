import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { INewContact } from '../common/models';

axios.defaults.baseURL = 'https://6463d446127ad0b8f89270c2.mockapi.io/tasks';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<INewContact[]>('/contacts');
      return response.data;
    } catch (err) {
      const error = err as unknown;
      if (!(error instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact: INewContact, { rejectWithValue }) => {
    try {
      const response = await axios.post<INewContact>('/contacts', newContact);
      return response.data;
    } catch (err) {
      const error = err as unknown;
      if (!(error instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete<INewContact>(
        `/contacts/${contactId}`
      );
      return response.data;
    } catch (err) {
      const error = err as unknown;
      if (!(error instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  'contacts/toggleFavorie',
  async (contact: INewContact, { rejectWithValue }) => {
    try {
      const response = await axios.put<INewContact>(`/contacts/${contact.id}`, {
        isFavorite: !contact.isFavorite,
      });
      return response.data;
    } catch (err) {
      const error = err as unknown;
      if (!(error instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(error.response?.data);
    }
  }
);
