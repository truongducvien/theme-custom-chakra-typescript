import { HStack, StackProps, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

type Props = {
  title?: string;
  icon?: ReactElement;
  hasBorderTop?: boolean;
  onClick?: VoidFunction;
} & StackProps;

export default function NavBtn({
	title,
	icon,
	hasBorderTop,
	onClick,
	...rest
}: Props) {
	return (
  <HStack
    justifyContent="flex-start"
    gap="12px"
    w="100%"
    borderTop={hasBorderTop ? '1px dashed' : 'unset'}
    borderColor="neutral.600"
    py="8px"
    onClick={onClick}
    {...rest}
		>
    {icon}
    <Text fontSize="14px" lineHeight="14px">
      {title}
    </Text>
  </HStack>
	);
}
