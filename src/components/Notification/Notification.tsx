import { ToastContainer } from 'react-toastify';

export const Notification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1700}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
