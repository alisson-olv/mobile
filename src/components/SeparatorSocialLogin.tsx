import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SocialIcons from './SocialIcons';

interface SeparatorSocialLoginProps {
  children: ReactNode;
}

export default function SeparatorSocialLogin({
  children,
}: SeparatorSocialLoginProps) {
  return (
    <View className='gap-5'>
      <View className='justify-center items-center relative'>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            '#B6B6B6',
            '#B6B6B6',
            'rgba(0, 0, 0, 0)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: 1,
          }}
        />
        <Text className='px-2 block text-sm text-[#B6B6B6] bg-[#2B1F2A]'>
          {children}
        </Text>
      </View>
      <SocialIcons />
    </View>
  );
}
