import styled from '@emotion/styled';
import { Field } from 'formik';

export const ErrorMsg = styled.p`
  /* position: relative; */
  font-style: italic;
  color: red;
  font-size: 10px;
`;

export const StyledFormInput = styled(Field)`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ .submit__lable,
  &:valid ~ .submit__lable,
  &:not(:empty) {
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
  }
`;
