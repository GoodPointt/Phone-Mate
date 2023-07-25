import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#087795"
      secondaryColor="#c0c0c0"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperClass="loader-wrapper"
      visible={true}
    />
  );
};
