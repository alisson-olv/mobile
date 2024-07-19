import { Stack } from 'expo-router';
import '../styles/global.css';
import GlobalLayout from '../components/GlobalLayout';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <GlobalLayout>
      <StatusBar barStyle='light-content' />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B1F2A',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            color: '#FFFFFF',
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        <Stack.Screen name='signin/index' options={{ title: 'Entrar' }} />
        <Stack.Screen name='signup/index' options={{ title: 'Cadastrar' }} />
      </Stack>
    </GlobalLayout>
  );
}
