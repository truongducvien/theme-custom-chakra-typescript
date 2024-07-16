import {
	ComponentMultiStyleConfig,
	StyleFunctionProps,
} from '@chakra-ui/react';

const CustomWrapper: ComponentMultiStyleConfig = {
	parts: ['outer', 'inner'],
	baseStyle: (props: StyleFunctionProps) => {
		const { colors } = props.theme;
		const brown500 = colors.brown[500];
		const gray800 = colors.gray[800];
		const blackShadow40 = colors.opacity.black[40];
		return {
			outer: {
				borderRadius: '8px',
				border: `2px solid ${brown500}`,
				width: 'fit-content',
				height: 'fit-content',
				bg: gray800,
				p: '3px',
				boxShadow: `0 4px 4px 0 ${blackShadow40}`,
			},
			inner: {
				borderRadius: '3px',
				w: '100%',
				h: '100%',
			},
		};
	},
	variants: {
		primary: {},
		rocky: (props: StyleFunctionProps) => {
			const { colors } = props.theme;
			const gray100 = colors.gray[100];
			const whiteOpacity12 = colors.opacity.white[12];
			return {
				outer: {},
				inner: {
					border: `1px solid ${whiteOpacity12}`,
					'background-image': `url("src/assets/images/rock-texture.png"), linear-gradient(${gray100}, ${gray100})`,
					bgBlendMode: 'hard-light',
					bgSize: 'contain',
					color: 'brown.300',
				},
			};
		},
	},
	defaultProps: {
		variant: 'primary',
	},
};

export default CustomWrapper;
