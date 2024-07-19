import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Input from '@/src/components/Input';
import Button from '@/src/components/Button';
import SeparatorSocialLogin from '@/src/components/SeparatorSocialLogin';
import { useState } from 'react';
import useRegisterUser from '@/src/hooks/useRegisterUser';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading, error } = useRegisterUser();
  const router = useRouter();

  async function handleRegisterUser() {
    await register({ name, email, password });
    if (!error) {
      router.push('/login');
    } else {
      setName('');
      setEmail('');
      setPassword('');
    }
  }

  // NAO ESTÀ VINDO A MENSAGEM DO EMAIL ALREADY EM USE

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
            <Input
              value={name}
              onChangeText={setName}
              type='username'
              label='Nome'
              placeholder='Seu Nome'
            />
            <Input
              value={email}
              onChangeText={setEmail}
              type='email'
              label='Email'
              placeholder='email@email.com'
            />
            <Input
              value={password}
              onChangeText={setPassword}
              type='password'
              label='Senha'
              placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
            />
          </View>

          <View>
            {loading ? (
              <Button disabled>Carregando</Button>
            ) : (
              <Button onPress={handleRegisterUser}>Cadastrar</Button>
            )}
          </View>

          {error && <Text>{error}</Text>}

          <SeparatorSocialLogin>Ou cadastre-se com</SeparatorSocialLogin>

          <Text className='text-center text-md text-[#A4A4A4]'>
            Já possui conta?{' '}
            <Link href='/login' className='underline'>
              Entre
            </Link>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
