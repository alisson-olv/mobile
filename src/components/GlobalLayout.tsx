import React, { ReactNode } from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View
      style={{ paddingTop: statusBarHeight }}
      className='flex-1 bg-[#2B1F2A]'
    >
      {children}
    </View>
  );
}
