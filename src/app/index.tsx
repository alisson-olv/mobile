import { Image, Text, View } from 'react-native';
import Input from '../components/input';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Image
        className='w-full h-full relative'
        source={require('../../assets/images/signin-screen.png')}
      />
      <View className='absolute top-[30%] gap-2 max-w-[80%]'>
        <Text className='text-center text-[46px] font-bold text-white'>
          Welcome Back!
        </Text>
        <Text className='text-center text-[16px] text-[#A4A4A4]'>
          welcome back we missed you
        </Text>

        <View className='gap-5'>
          <Input type='username' label='Username' placeholder='Username' />
          <Input
            type='password'
            label='Password'
            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
          />
        </View>
      </View>
    </View>
  );
}
