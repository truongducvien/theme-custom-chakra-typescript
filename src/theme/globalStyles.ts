import { ChakraTheme } from '@chakra-ui/react';

const globalStyles: ChakraTheme['styles'] = {
	global: {
		'@font-face': {
			fontFamily: 'silvano-western',
			src: 'url("src/assets/fonts/Silvano-Western-Demo.otf")',
		},
		'*': {
			fontFamily: 'silvano-western',
		},
	},
};

export default globalStyles;
