import { Image, Pressable, View } from 'react-native';

export default function SocialIcons() {
  return (
    <View className='flex flex-row gap-4 items-center justify-center'>
      <Pressable onPress={() => alert('Feature not done')}>
        <Image
          resizeMode='contain'
          source={require('../../assets/images/google-icon.png')}
        />
      </Pressable>
      <Pressable onPress={() => alert('Feature not done')}>
        <Image
          resizeMode='contain'
          source={require('../../assets/images/apple-icon.png')}
        />
      </Pressable>
      <Pressable onPress={() => alert('Feature not done')}>
        <Image
          resizeMode='contain'
          source={require('../../assets/images/facebook-icon.png')}
        />
      </Pressable>
    </View>
  );
}
