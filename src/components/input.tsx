import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';
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
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
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
        <View className='flex flex-row items-center justify-between py-3 px-5 border border-slate-500 rounded-lg'>
          <View>
            {type === 'email' && (
              <Fontisto name='email' size={24} color='#A4A4A4' />
            )}
            {type === 'username' && (
              <AntDesign name='user' size={24} color='#A4A4A4' />
            )}
            {type === 'password' && (
              <Feather name='key' size={24} color='#A4A4A4' />
            )}
          </View>
          <TextInput
            secureTextEntry={type === 'password' && showPassword}
            placeholderTextColor='#A4A4A4'
            style={{ lineHeight: 18 }}
            className='pl-5 py-2 flex-1 text-lg font-medium text-[#A4A4A4]'
            {...props}
          />
          {type === 'password' && (
            <Pressable onPress={toggleShowPassword}>
              <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color='#A4A4A4'
              />
            </Pressable>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}
