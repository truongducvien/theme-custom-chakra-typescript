import { FlexProps } from '@chakra-ui/react';

import { default as titanBetHomeStyles } from './Home.styles.titanbet';

export type THomeSchema = Partial<{
  wrapper: FlexProps;
  container: FlexProps;
}>;

const homeStyles: THomeSchema = {
  wrapper: titanBetHomeStyles.wrapper ?? {},
  container: titanBetHomeStyles.container ?? {},
};

export { homeStyles };
