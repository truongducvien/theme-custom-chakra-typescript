import { Close, Invoice, Thoroughbreds } from '@/components';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
  useToken,
} from '@chakra-ui/react';

export default function BetSlipAccordion() {
  const [
    gray400,
    gray600,
    shadowBlack50,
    neutral300,
    opacityWhite12,
    opacityBlack40,
  ] = useToken('colors', [
    'gray.400',
    'gray.600',
    'opacity.black.50',
    'neutral.300',
    'opacity.white.12',
    'opacity.black.40',
  ]);

  return (
    <Accordion defaultIndex={[0, 1]} allowMultiple w={'100%'} p={'7px'}>
      <AccordionItem border={'unset'}>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <Text fontSize={'14px'}>SINGLES (1)</Text>
          <AccordionButton
            w={'24px'}
            h={'24px'}
            p={'unset'}
            bgImage={`linear-gradient(${gray600}, ${gray400})`}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'6px'}
            _hover={{ opacity: 0.8 }}
          >
            <AccordionIcon />
          </AccordionButton>
        </HStack>
        <AccordionPanel px={0}>
          <Box
            w={'100%'}
            p={'8px'}
            boxShadow={`0px 4px 5px 0px ${opacityBlack40}`}
            bgImage={'linear-gradient(to right, gray.300, gray.200)'}
            border={'1px solid'}
            borderColor={opacityWhite12}
            borderRadius={'4px'}
          >
            <HStack
              justifyContent={'space-between'}
              alignItems={'start'}
              sx={{ '*': { fontFamily: 'sans-serif' } }}
            >
              <HStack justifyContent={'flex-start'} align={'start'}>
                <Thoroughbreds />
                <VStack color={'white'} justifyContent={'flex-start'} gap={0}>
                  <Text w={'100%'} fontSize={'14px'}>
                    1. Firestorm <sup>(4)</sup>
                  </Text>
                  <HStack w={'100%'}>
                    <Text fontSize={'12px'}>Win</Text>
                    <Box
                      bg={'gray.100'}
                      w={'5px'}
                      h={'5px'}
                      borderRadius={'50%'}
                    />
                    <Text fontSize={'12px'}>Stake $1.00</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'12px'}>Warwick Farm</Text>
                    <Badge>5m12s</Badge>
                  </HStack>
                </VStack>
              </HStack>

              <HStack color={'white'}>
                <Text fontSize={'14px'} fontWeight={700}>
                  9.50
                </Text>
                <Close />
              </HStack>
            </HStack>

            <InputGroup mt={'8px'}>
              <InputLeftAddon>$</InputLeftAddon>
              <Input />
            </InputGroup>

            <HStack mt={'13px'} w={'100%'} justifyContent={'space-evenly'}>
              {[5, 10, 25, 50, 100].map((item, index) => (
                <Button
                  key={index}
                  size={'sm'}
                  w={'37px'}
                  h={'37px'}
                  fontSize={'12px'}
                  color={'neutral.900'}
                  fontFamily={'Roboto Condensed'}
                >
                  ${item}
                </Button>
              ))}
            </HStack>

            <HStack mt={'13px'} w={'100%'} justifyContent={'flex-end'}>
              <Badge
                p={'4px'}
                borderRadius={'4px'}
                boxShadow={`0 4px 4px 0 ${shadowBlack50}`}
              >
                Est. Return | $95.00
              </Badge>
            </HStack>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border={'unset'}>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <Text fontSize={'14px'}>MULTI (0)</Text>
          <AccordionButton
            w={'24px'}
            h={'24px'}
            p={'unset'}
            bgImage={`linear-gradient(${gray600}, ${gray400})`}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'6px'}
            _hover={{ opacity: 0.8 }}
          >
            <AccordionIcon />
          </AccordionButton>
        </HStack>
        <AccordionPanel px={0}>
          <Box
            w={'100%'}
            p={'8px'}
            border={'unset'}
            bg={shadowBlack50}
            boxShadow={`0 0 8px 0 ${shadowBlack50} inset, 0 1px 0 0 ${neutral300}`}
            borderRadius={'4px'}
          >
            <HStack alignItems={'flex-start'} gap={'8px'}>
              <Invoice boxSize={7} />
              <Text color={'white'} fontSize={'12px'} fontFamily={'sans-serif'}>
                To build a Multi, please add more selections to increase your
                potential returns.
              </Text>
            </HStack>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
