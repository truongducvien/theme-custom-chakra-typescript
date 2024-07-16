import { ComponentMultiStyleConfig, StyleFunctionProps } from '@chakra-ui/react';

const Input: ComponentMultiStyleConfig = {
  baseStyle: {
    addon: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '700',
    },
    field: {
      fontFamily: 'Roboto Condensed',
    },
  },
  parts: ['addon'],
  variants: {
    primary: (props: StyleFunctionProps) => {
      const { colors } = props.theme;
      const brown300 = colors.brown['300'];
      const brown400 = colors.brown['400'];
      return {
        addon: {
          bgImage: `linear-gradient(${brown300}, ${brown400})`,
          color: 'neutral.900',
        },
        field: {
          bg: 'black',
          border: `2px solid ${brown400}`,
        },
      };
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};

export default Input;
