import { toast } from 'react-toastify';

export const onAddSucces = (contactName: string) =>
  toast.success(`${contactName} was added to your contacts`);

export const onRemoveSucces = (contactName: string) => {
  toast.info(`${contactName} was removed from your contacts`);
};

export const onError = (errorMsg: string) => {
  return toast.error(`Opps! Some error occured😒 ${errorMsg}`);
};

export const onFavoriteSucces = (contactName: string, isFavorite: boolean) => {
  isFavorite
    ? toast.success(`${contactName} was added to your favorits`)
    : toast.info(`${contactName} was not in your favorits any more`);
};
