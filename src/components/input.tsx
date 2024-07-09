import { Text, TextInput, TextInputProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

interface InputProps extends TextInputProps {
  label: string;
  type: 'username' | 'email' | 'password';
}

export default function Input({ label, type, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(true);
  const isShowPassword = () => {
    if (showPassword) {
      return (
        <Feather
          onPress={() => setShowPassword(false)}
          name='eye-off'
          size={24}
          color='#A4A4A4'
        />
      );
    } else {
      return (
        <Feather
          onPress={() => setShowPassword(true)}
          name='eye'
          size={24}
          color='#A4A4A4'
        />
      );
    }
  };

  return (
    <View>
      <Text className='text-white text-lg mb-2'>{label}</Text>
      <LinearGradient
        colors={['#524758', '#291f2a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 8 }}
      >
        <View className='flex flex-row items-center justify-center p-5 px-10 border border-slate-500 rounded-lg'>
          {type === 'email' && (
            <Fontisto name='email' size={24} color='#A4A4A4' />
          )}
          {type === 'username' && (
            <AntDesign name='user' size={24} color='#A4A4A4' />
          )}
          {type === 'password' && (
            <Feather name='key' size={24} color='#A4A4A4' />
          )}
          <TextInput
            secureTextEntry={type === 'password' && showPassword}
            placeholderTextColor='#A4A4A4'
            className='w-full pl-5 text-lg font-medium text-[#A4A4A4] leading-[n]'
            {...props}
          />
          {type === 'password' && isShowPassword()}
        </View>
      </LinearGradient>
    </View>
  );
}
