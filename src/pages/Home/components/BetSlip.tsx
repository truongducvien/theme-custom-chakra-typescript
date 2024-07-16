import {
	Flex,
	HStack,
	Image,
	Text,
	VStack,
	Button,
	Box,
	Center,
} from '@chakra-ui/react';

import rightBarLogo from '@/assets/images/right-bar-logo.png';
import {
	ArrowDown,
	ChevronDown,
	Close,
	CustomWrapper,
	Gift,
	Note,
} from '@/components';

import BetSlipAccordion from './BetSlipAccordian';

export default function BetSlip() {
	return (
  <VStack position="relative">
    <Image
      src={rightBarLogo}
      position="absolute"
      w="83px"
      h="95px"
      top="-9px"
      left="7px"
			/>
    <HStack w="100%" justifyContent="flex-end">
      <Button size="sm">
        <Flex gap="12px" alignItems="center">
          <Flex direction="column" alignItems="flex-start">
            <Text lineHeight="16px" fontSize="16px" color="text.black">
              $9000.00
            </Text>
            <HStack p={0}>
              <Gift />
              <Text lineHeight="10px" fontSize="10px">
                $100.00
              </Text>
            </HStack>
          </Flex>
          <ChevronDown />
        </Flex>
      </Button>
      <Button size="sm" flexDirection="column">
        <Text lineHeight="10px" fontSize="10px">
          BETS
        </Text>
        <Text lineHeight="18px" fontSize="18px">
          2
        </Text>
      </Button>
    </HStack>

    <CustomWrapper
      variant="rocky"
      w="272px"
      h="100%"
      zIndex={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
			>
      <VStack>
        <Box borderBottom="1px dashed" borderColor="neutral.500" w="100%">
          <HStack
            p="10px"
            borderBottom="1px dashed"
            borderColor="neutral.800"
            w="100%"
            justifyContent="flex-start"
						>
            <Note />
            <Text color="brown.300">Bet slip</Text>
            <Center
              w="16px"
              h="16px"
              fontSize="12px"
              bg="brown.300"
              color="black"
              lineHeight="16px"
              borderRadius="3px"
              fontFamily="sans-serif"
              fontWeight={700}
							>
              1
            </Center>
          </HStack>
        </Box>

        <BetSlipAccordion />
      </VStack>

      <Box w="100%">
        <VStack
          position="relative"
          w="100%"
          bg="opacity.black.40"
          p="20px 7px 8px"
          gap="9px"
					>
          <Button
            variant="solid"
            position="absolute"
            top="-13px"
            h="fit-content"
            p="6px 8px"
            borderRadius="6px"
            bgImage="linear-gradient(neutral.200, neutral.300)"
            color="text.black"
            leftIcon={<Close />}
						>
            CLEAR
          </Button>
          <HStack w="100%" justifyContent="space-between">
            <Text color="text.gray" fontSize="12px">
              Total stake
            </Text>
            <Text fontSize="14px">$10.00</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text color="text.gray" fontSize="12px">
              Est. payout
            </Text>
            <Text fontSize="14px">$95.00</Text>
          </HStack>

          <Button mt="4px" leftIcon={<ArrowDown boxSize={4} />} w="100%">
            Place Bet
          </Button>
        </VStack>
      </Box>
    </CustomWrapper>
  </VStack>
	);
}
