import { toast } from 'react-toastify';
import { Formik, ErrorMessage, Form } from 'formik';

import { INITIAL_VALUES, VALIDATION_SCHEMA } from '../../common/formik';
import { isContactExist } from '../../common/utils';
import { INewContact } from '../../common/models';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { changeFilter } from '../../redux/filterSlice';
import { addContact } from '../../redux/operations';
import { toggleModal } from '../../redux/modalSlice';
import { ErrorMsg, StyledFormInput } from './ContactForm.styled';

export const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts: INewContact[] = useAppSelector(
    state => state.contacts.contacts
  );

  const handleSubmit = (values: { name: string; number: string }) => {
    const newContact: INewContact = {
      name: values.name.toString(),
      number: values.number.toString(),
    };
    if (isContactExist(newContact, contacts)) {
      toast.warn(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    dispatch(changeFilter({ filter: '' }));
    dispatch(toggleModal());
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="user-box">
          <StyledFormInput type="text" name="name" autoFocus />
          <label className="submit__lable">Username</label>
          <ErrorMessage name="name" component={ErrorMsg} />
        </div>

        <div className="user-box">
          <StyledFormInput type="tel" name="number" />
          <ErrorMessage name="number" component={ErrorMsg} />
          <label className="submit__lable">Phone number</label>
        </div>

        <center>
          <button className="submit-btn" type="submit">
            Add contact<span></span>
          </button>
        </center>
      </Form>
    </Formik>
  );
};
