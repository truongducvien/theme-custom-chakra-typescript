import { Box, BoxProps, useMultiStyleConfig } from '@chakra-ui/react';

interface Props extends BoxProps {
  variant?: 'primary' | 'rocky';
}

const CustomWrapper: React.FC<Props> = ({
  children,
  variant,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  ...rest
}) => {
  const styles = useMultiStyleConfig('CustomWrapper', { variant });

  return (
    <Box __css={styles.outer} {...rest}>
      <Box
        __css={{
          ...styles.inner,
          display,
          flexDirection,
          justifyContent,
          alignItems,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomWrapper;
