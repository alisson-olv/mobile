import { Pressable, Text, View, ScrollView } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import SeparatorSocialLogin from '../components/SeparatorSocialLogin';

export default function Index() {
  return (
    <View className='flex-1 bg-[#2B1F2A]'>
      <View className='gap-7 m-auto max-w-[90%] pt-10 pb-20'>
        <View>
          <Text className='text-center text-[46px] font-bold text-white'>
            Welcome Back!
          </Text>
          <Text className='text-center text-[16px] text-[#A4A4A4]'>
            welcome back we missed you
          </Text>
        </View>

        <View className='gap-5'>
          <Input type='username' label='Username' placeholder='Username' />
          <View>
            <Input
              type='password'
              label='Password'
              placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
            />
            <Pressable onPress={() => alert('Feature not done')}>
              <Text className='text-right text-sm mt-2 text-[#A4A4A4]'>
                Forgot Password?
              </Text>
            </Pressable>
          </View>
        </View>

        <View>
          <Button>Sign in</Button>
        </View>

        <SeparatorSocialLogin>Or continue with</SeparatorSocialLogin>
      </View>
    </View>
  );
}
