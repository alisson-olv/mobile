import { PropsWithChildren } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps extends PressableProps {}

export default function Button({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <LinearGradient
      colors={['#9c3fe2', '#c4554e']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ borderRadius: 16 }}
    >
      <Pressable className='w-full p-5 rounded-2xl' {...props}>
        <Text className='text-center text-white font-medium text-lg'>
          {children}
        </Text>
      </Pressable>
    </LinearGradient>
  );
}
