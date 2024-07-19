import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import SeparatorSocialLogin from '@/src/components/SeparatorSocialLogin';

export default function SignUpScreen() {
  return (
    <View className='flex-1 bg-[#2B1F2A]'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='gap-7 m-auto w-[90%] pt-10 pb-20'>
          <View className='gap-2'>
            <Text className='text-center text-[46px] font-bold text-white'>
              Comece gratuitamente
            </Text>
            <Text className='text-center text-[16px] text-[#A4A4A4]'>
              Grátis para sempre. Não é necessário cartão de crédito
            </Text>
          </View>

          <View className='gap-5'>
            <Input type='username' label='Nome' placeholder='Seu Nome' />
            <Input type='email' label='Email' placeholder='email@email.com' />
            <Input
              type='password'
              label='Senha'
              placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
            />
          </View>

          <View>
            <Button>Cadastrar</Button>
          </View>

          <SeparatorSocialLogin>Ou cadastre-se com</SeparatorSocialLogin>

          <Text className='text-center text-md text-[#A4A4A4]'>
            Já possui conta?{' '}
            <Link href='/signin' className='underline'>
              Entre
            </Link>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
