import { Box, Flex, useToken } from '@chakra-ui/react';

import { CustomWrapper } from '@/components';

import bgImage from '../../assets/images/image-bg.png';

import { BetSlip, NavBar } from './components';

export default function Home() {
	const [gray800, gray500] = useToken('colors', ['gray.800', 'gray.500']);
	return (
  <Flex
    direction="column"
    h="100%"
    bgSize="contain"
    bgRepeat="no-repeat"
    __css={{
				'background-image': `url(${bgImage}), linear-gradient(${gray800}, ${gray500})`,
			}}
		>
    <Box h="56px" />
    <Flex
      w="100%"
      maxW="1400px"
      mx="auto"
      justifyContent="space-between"
      gap="16px"
      pb="32px"
			>
      <NavBar />
      <CustomWrapper w="824px" h="100%" />
      <BetSlip />
    </Flex>
  </Flex>
	);
}
