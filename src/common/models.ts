export interface INewContact {
  id?: string;
  name: string;
  number: string;
  createdAt?: string;
  isFavorite?: boolean;
}

export type ThandleChange = React.ChangeEvent<HTMLInputElement>;
