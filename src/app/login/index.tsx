import { Pressable, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import SeparatorSocialLogin from '@/src/components/SeparatorSocialLogin';

export default function LoginScreen() {
  return (
    <View className='flex-1 bg-[#2B1F2A]'>
      <View className='gap-7 m-auto w-[90%] pt-10 pb-20'>
        <View className='gap-2'>
          <Text className='text-center text-[46px] font-bold text-white'>
            Bem-vindo
          </Text>
          <Text className='text-center text-[16px] text-[#A4A4A4]'>
            bem-vindo de volta, sentimos sua falta
          </Text>
        </View>

        <View className='gap-5'>
          <Input type='email' label='Email' placeholder='email@email.com' />
          <View>
            <Input
              type='password'
              label='Senha'
              placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
            />
            <Pressable onPress={() => alert('Feature not done')}>
              <Text className='text-right text-sm mt-3 text-[#A4A4A4]'>
                Esqueceu a senha?
              </Text>
            </Pressable>
          </View>
        </View>

        <View>
          <Button>Entrar</Button>
        </View>

        <SeparatorSocialLogin>Ou continue com</SeparatorSocialLogin>

        <Text className='text-center text-md text-[#A4A4A4]'>
          É o seu primeiro acesso?{' '}
          <Link href='/register' className='underline'>
            Cadastre-se
          </Link>
        </Text>
      </View>
    </View>
  );
}
