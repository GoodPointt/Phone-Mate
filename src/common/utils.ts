import { INewContact } from './models';

export const isContactExist = (
  newContact: INewContact,
  contactsArr: INewContact[]
): Boolean => {
  return contactsArr?.find(
    contact =>
      contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
  )
    ? true
    : false;
};
