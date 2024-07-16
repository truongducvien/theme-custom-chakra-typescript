import { Icon, IconProps } from '@chakra-ui/react';

function ChevronDown(props: IconProps) {
	return <Icon viewBox="-1 -4 14 14" {...props}>
  <path
    d="M5.46094 6.03906L0.960938 1.53906C0.65625 1.25781 0.65625 0.765625 0.960938 0.484375C1.24219 0.179688 1.73438 0.179688 2.01562 0.484375L6 4.44531L9.96094 0.484375C10.2422 0.179688 10.7344 0.179688 11.0156 0.484375C11.3203 0.765625 11.3203 1.25781 11.0156 1.53906L6.51562 6.03906C6.23438 6.34375 5.74219 6.34375 5.46094 6.03906Z"
    fill="currentColor"
		/>
	</Icon>;
}

export default ChevronDown;
