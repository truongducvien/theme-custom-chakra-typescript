import { Icon, IconProps } from '@chakra-ui/react';

function ContactUs(props: IconProps) {
	return <Icon viewBox="2 -1 22 22" boxSize={5} {...props}>
  <path
    d="M5.5 2H18.5C19.3125 2 20 2.6875 20 3.5C20 4 19.75 4.4375 19.375 4.71875L12.5938 9.8125C12.2188 10.0938 11.75 10.0938 11.375 9.8125L4.59375 4.71875C4.21875 4.4375 4 4 4 3.5C4 2.6875 4.65625 2 5.5 2ZM4 5.5L10.7812 10.625C11.5 11.1562 12.4688 11.1562 13.1875 10.625L20 5.5V12C20 13.125 19.0938 14 18 14H6C4.875 14 4 13.125 4 12V5.5Z"
    fill="currentColor"
		/>
	</Icon>;
}

export default ContactUs;
