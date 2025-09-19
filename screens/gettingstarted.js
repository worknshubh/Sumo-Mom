import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';
import ButtonPrimary from '../components/button';
import { useNavigation } from '@react-navigation/native';
function GettingStarted() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/gs.png')}
        style={{ flex: 1 }}
        className="justify-between p-8 bg-cover"
      >
        <View>
          <Text className="text-3xl font-bold">Getting Started</Text>
          <Text>With our new Sumo Mom</Text>
        </View>

        <Image
          source={require('../assets/images/gspw.png')}
          className="h-[65%] w-[55%] ml-12 self-center"
        ></Image>

        <View>
          <ButtonPrimary name="Upload Docs"></ButtonPrimary>
          <Text
            className="mt-4 text-center"
            onPress={() => {
              navigation.replace('DrawerMenu');
            }}
          >
            Upload it later
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default GettingStarted;
