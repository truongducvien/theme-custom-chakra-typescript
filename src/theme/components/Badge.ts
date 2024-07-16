import { ComponentSingleStyleConfig } from '@chakra-ui/react';

const Badge: ComponentSingleStyleConfig = {
	baseStyle: {
		fontFamily: 'Roboto Condensed',
		fontSize: '9px',
		fontWeight: '800',
		textTransform: 'unset',
	},
	variants: {
		primary: {
			bg: 'brown.300',
			color: 'black',
		},
		danger: {
			bg: 'red.500',
			color: 'white',
		},
		success: {
			bg: 'green.500',
			color: 'white',
		},
	},
	sizes: {},
	defaultProps: {
		variant: 'primary',
	},
};

export default Badge;
