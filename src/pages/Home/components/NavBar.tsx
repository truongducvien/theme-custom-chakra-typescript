import { Flex, Image, Text, VStack } from '@chakra-ui/react';

import logo from '@/assets/images/logo.png';
import textLogo from '@/assets/images/text-logo.png';
import {
	ContactUs,
	Deposit,
	EplMatches,
	Greyhounds,
	Harness,
	Home,
	LiveChat,
	MyAccount,
	NavWrapper,
	NbaMatches,
	NflMatches,
	NhlMatches,
	Promotions,
	ResponsibleGamblingTools,
	Sports,
	Thoroughbreds,
} from '@/components';

import NavBtn from './NavBtn';

import { ModeSwitch } from '.';

const firstNavs = [
	{ icon: <Home />, key: 'Home' },
	{ icon: <Deposit />, key: 'Deposit' },
	{ icon: <Thoroughbreds />, key: 'Thoroughbreds' },
	{ icon: <Greyhounds />, key: 'Greyhounds' },
	{ icon: <Harness />, key: 'Harness' },
	{ icon: <Sports />, key: 'Sports' },
	{ icon: <Promotions />, key: 'Promotions' },
];

const secondNavs = [
	{ icon: <NbaMatches />, key: 'NbaMatches' },
	{ icon: <NflMatches />, key: 'NFL Matches' },
	{ icon: <EplMatches />, key: 'EPL Matches' },
	{ icon: <NhlMatches />, key: 'NHL Matches' },
];

const thirdNavs = [
	{ icon: <MyAccount />, key: 'My Account' },
	{ icon: <LiveChat />, key: 'Live Chat' },
	{ icon: <ContactUs />, key: 'Contact Us' },
	{ icon: <ResponsibleGamblingTools />, key: 'Responsible Gambling Tools' },
];

export default function NavBar() {
	return (
  <Flex flexBasis="272px" direction="column" alignItems="center">
    <VStack w="170px" gap="2px">
      <Image src={logo} />
      <Image src={textLogo} />
    </VStack>

    <ModeSwitch />

    <NavWrapper mt="40px">
      <VStack
        w="100%"
        h="100%"
        px="8px"
        gap={0}
        __css={{
						'background-image':
              'linear-gradient(180deg, #ffffff0f 0%, #ffffff00 100%)',
					}}
				>
        {firstNavs.map((nav, index) => (
          <NavBtn
            key={nav.key}
            title={nav.key}
            icon={nav.icon}
            hasBorderTop={index !== 0}
						/>
					))}
      </VStack>
    </NavWrapper>

    <NavWrapper mt="40px" bgSize="cover" h="210px">
      <VStack
        w="100%"
        h="100%"
        px="8px"
        gap={0}
        __css={{
						'background-image':
              'linear-gradient(180deg, #ffffff0f 0%, #ffffff00 100%)',
					}}
				>
        <Text fontSize="14px" w="100%" color="gray.100" py="8px">
          POPULAR MATCHES
        </Text>
        {secondNavs.map(nav => (
          <NavBtn
            key={nav.key}
            title={nav.key}
            icon={nav.icon}
            hasBorderTop
						/>
					))}
      </VStack>
    </NavWrapper>

    <NavWrapper mt="40px" bgSize="cover" h="210px">
      <VStack
        w="100%"
        h="100%"
        px="8px"
        gap={0}
        __css={{
						'background-image':
              'linear-gradient(180deg, #ffffff0f 0%, #ffffff00 100%)',
					}}
				>
        <Text fontSize="14px" w="100%" color="gray.100" py="8px">
          QUICK LINKS
        </Text>
        {thirdNavs.map(nav => (
          <NavBtn
            key={nav.key}
            title={nav.key}
            icon={nav.icon}
            hasBorderTop
						/>
					))}
      </VStack>
    </NavWrapper>
  </Flex>
	);
}
