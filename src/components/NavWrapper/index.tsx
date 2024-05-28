import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import navBg from '../../assets/images/sidebar-bg.png';
import navBarBorderTop from '../../assets/images/sidebar-border-top.png';
import navBarBorderBottom from '../../assets/images/sidebar-border-bottom.png';

const NavWrapper: React.FC<BoxProps> = ({ children, ...rest }) => {
  const pseudoStyle = {
    content: "''",
    position: 'absolute',
    display: 'block',
    bgSize: 'contain',
  };
  return (
    <Box
      position={'relative'}
      w={'254px'}
      h={'292px'}
      bgImage={navBg}
      bgSize={'contain'}
      bgRepeat={'no-repeat'}
      m={'17px'}
      p={'5px 24px 18px 27px'}
      color={'brown.300'}
      _before={{
        ...pseudoStyle,
        w: '286px',
        h: '60px',
        bgImage: navBarBorderTop,
        top: '-34px',
        left: '-14px',
      }}
      _after={{
        ...pseudoStyle,
        w: '286px',
        h: '60px',
        bgImage: navBarBorderBottom,
        bottom: '-23px',
        left: '-15px',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default NavWrapper;
