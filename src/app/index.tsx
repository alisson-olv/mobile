import { Pressable, Text, View, ScrollView } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import SeparatorSocialLogin from '../components/SeparatorSocialLogin';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className='flex-1 bg-[#2B1F2A]'>
      <View className='gap-7 m-auto max-w-[90%] pt-10 pb-20'>
        <Text className='text-white text-center'>Home</Text>
        <Link className='text-white text-center' href='/signin'>
          Entrar
        </Link>
        <Link className='text-white text-center' href='/signup'>
          Cadastrar
        </Link>
      </View>
    </View>
  );
}
