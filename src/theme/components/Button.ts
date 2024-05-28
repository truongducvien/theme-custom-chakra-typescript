import {
  ButtonProps,
  ComponentSingleStyleConfig,
  StyleFunctionProps,
} from '@chakra-ui/react';

const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    border: '1px solid',
    borderRadius: '6px',
    _focus: {
      outline: 'unset',
    },
    '*': {
      fontFamily: '"Roboto Condensed", sans-serif;',
      fontWeight: 900,
    },
  } as ButtonProps,
  variants: {
    primary: (props: StyleFunctionProps) => {
      const { colors } = props.theme;
      const brown100 = colors.brown['100'];
      const brown200 = colors.brown['200'];
      const brown300 = colors.brown['300'];
      const brown400 = colors.brown['400'];
      const brown600 = colors.brown['600'];
      const brown700 = colors.brown['700'];
      const brown800 = colors.brown['800'];
      const shadowBlack50 = colors.opacity.black[50];
      return {
        h: 'fit-content',
        borderColor: brown100,
        bgImage: `linear-gradient(${brown300}, ${brown400})`,
        boxShadow: `0 0 0 1px ${brown600},  0 0 0 3px ${brown200}, 0 4px 6px 0 ${shadowBlack50}`,
        borderRadius: '6px',
        bgColor: brown800,
        _hover: {
          bg: brown800,
          borderColor: brown300,
          boxShadow: `0 0 0 1px ${brown700},  0 0 0 3px ${brown200}`,
        },
        color: 'gray.800',
      };
    },
    secondary: (props: StyleFunctionProps) => {
      const { colors } = props.theme;
      const brown200 = colors.brown['200'];
      const gray300 = colors.gray['300'];
      return {
        h: 'fit-content',
        borderColor: 'gray.500',
        boxShadow: `0 0 0 1px ${brown200},  0 0 0 3px ${gray300}`,
        bgImage: 'linear-gradient(gray.400, gray.600)',
        color: 'brown.300',
        _hover: {
          borderColor: 'gray.500',
          bg: 'gray.600',
        },
      };
    },
    solid: {},
    outline: {}, // TODO: Add style for outline variant
    selected: (styleConfig: StyleFunctionProps) => ({
      cursor: 'default',
      h: 'fit-content',
      bg: 'black',
      borderColor: 'black',
      boxShadow: `0px 1px 0px 0px ${styleConfig.theme.colors.opacity['black'][50]}`,
      color: 'brown.300',
      _hover: {
        borderColor: 'black',
      },
    }),
  },
  sizes: {
    lg: {
      fontSize: '14px',
      p: '11px',
    },
    md: {
      fontSize: '12px',
      p: '10px',
    },
    sm: {
      fontSize: '12px',
      p: '4px 12px',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'lg',
  },
};

export default Button;
