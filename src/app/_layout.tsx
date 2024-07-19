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
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
          },
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </GlobalLayout>
  );
}
