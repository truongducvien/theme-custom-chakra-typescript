import {
	ComponentSingleStyleConfig,
	StyleFunctionProps,
} from '@chakra-ui/react';

const Text: ComponentSingleStyleConfig = {
	baseStyle: (props: StyleFunctionProps) => ({
		color: props.theme.colors.text.primary,
	}),
	variants: {
		primary: {},
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
	defaultProps: {},
};

export default Text;
