import { CustomWrapper } from '@/components';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import switchBtnBg from '@/assets/images/switch-btn-bg.png';
import switchBtn from '@/assets/images/switch-btn.png';

export default function ModeSwitch() {
  const [mode, setMode] = useState<'racing' | 'sports'>('racing');

  const handleSwitchMode = () => {
    setMode((prev) => (prev === 'racing' ? 'sports' : 'racing'));
  };

  return (
    <CustomWrapper mt={'8px'} variant={'rocky'}>
      <HStack w={'254px'} h={'50px'} justifyContent={'center'} gap={'15px'}>
        <Text
          mt={'5px'}
          fontSize={'16px'}
          textShadow={
            mode === 'racing' ? '0 0 10px #FFB95399' : '0 2px #FFFFFF14'
          }
          color={mode === 'sports' ? 'gray.700' : 'inherit'}
        >
          RACING
        </Text>
        <Box position={'relative'}>
          <Image
            src={switchBtn}
            position={'absolute'}
            w={'40px'}
            h={'40px'}
            top={'-5px'}
            left={'-5px'}
            cursor={'pointer'}
            transform={mode === 'sports' ? 'translateX(20px)' : 'unset'}
            transition={'transform .2s linear'}
            onClick={handleSwitchMode}
          />
          <Image src={switchBtnBg} w={'50px'} h={'27px'} />
        </Box>
        <Text
          mt={'5px'}
          fontSize={'16px'}
          textShadow={
            mode === 'racing' ? '0 2px #FFFFFF14' : '0 0 10px #FFB95399'
          }
          color={mode === 'racing' ? 'gray.700' : 'inherit'}
        >
          SPORTS
        </Text>
      </HStack>
    </CustomWrapper>
  );
}
