import { Icon, IconProps } from '@chakra-ui/react';

const LiveChat = (props: IconProps) => (
  <Icon viewBox="2 -1 22 22" boxSize={5} {...props}>
    <path
      d="M12 3.5C8.40625 3.5 5.5 6.4375 5.5 10V11.25C5.5 11.6875 5.15625 12 4.75 12C4.3125 12 4 11.6875 4 11.25V10C4 5.59375 7.5625 2 12 2C16.4062 2 20 5.59375 20 10V14.5312C20 16.0312 18.75 17.2812 17.2188 17.2812L13.7812 17.25C13.5312 17.7188 13.0312 18 12.5 18H11.5C10.6562 18 10 17.3438 10 16.5C10 15.6875 10.6562 15 11.5 15H12.5C13.0312 15 13.5312 15.3125 13.7812 15.75L17.25 15.7812C17.9375 15.7812 18.5 15.2188 18.5 14.5312V10C18.5 6.4375 15.5625 3.5 12 3.5ZM8.5 8.5H9C9.53125 8.5 10 8.96875 10 9.5V13C10 13.5625 9.53125 14 9 14H8.5C7.375 14 6.5 13.125 6.5 12V10.5C6.5 9.40625 7.375 8.5 8.5 8.5ZM15.5 8.5C16.5938 8.5 17.5 9.40625 17.5 10.5V12C17.5 13.125 16.5938 14 15.5 14H15C14.4375 14 14 13.5625 14 13V9.5C14 8.96875 14.4375 8.5 15 8.5H15.5Z"
      fill="currentColor"
    />
  </Icon>
);

export default LiveChat;
