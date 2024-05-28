import { Icon, IconProps } from '@chakra-ui/react';

const MyAccount = (props: IconProps) => (
  <Icon viewBox="2 -1 22 22" boxSize={5} {...props}>
    <path
      d="M6 2H18C18.5312 2 19 2.46875 19 3C19 3.5625 18.5312 4 18 4H6.5C6.21875 4 6 4.25 6 4.5C6 4.78125 6.21875 5 6.5 5H18C19.0938 5 20 5.90625 20 7V14C20 15.125 19.0938 16 18 16H6C4.875 16 4 15.125 4 14V4C4 2.90625 4.875 2 6 2ZM17 9.5C16.4375 9.5 16 9.96875 16 10.5C16 11.0625 16.4375 11.5 17 11.5C17.5312 11.5 18 11.0625 18 10.5C18 9.96875 17.5312 9.5 17 9.5Z"
      fill="currentColor"
    />
  </Icon>
);

export default MyAccount;
