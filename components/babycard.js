import React from 'react';
import { View, Text, Image } from 'react-native';
import '../global.css';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
function BabyCard(props) {
  const babyImages = {
    lemon: require('../assets/fruits/lemon.png'),
    apple: require('../assets/fruits/apple.png'),
    mango: require('../assets/fruits/mango.png'),
    banana: require('../assets/fruits/banana.png'),
    grape: require('../assets/fruits/grape.png'),
    peach: require('../assets/fruits/peach.png'),
    pear: require('../assets/fruits/pear.png'),
    watermelon: require('../assets/fruits/watermelon.png'),
    pumpkin: require('../assets/fruits/pumpkin.png'),
    papaya: require('../assets/fruits/papaya.png'),
  };

  return (
    <View className="bg-white h-full rounded-lg">
      <View className="flex-row w-[100%] justify-between items-center">
        <View
          className="w-[40%] "
          style={{
            height: 152,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
          }}
        >
          <Image
            source={babyImages[props?.data?.babySize]}
            style={{
              height: heightPercentageToDP('12%%'),
              width: widthPercentageToDP('24%'),
            }}
          ></Image>
        </View>
        <View className="w-[60%]">
          <Text className="font-semibold text-xl mb-1">
            Your baby is the size of a {props?.data?.babySize}
          </Text>
          <Text>{props?.data?.tipOftheWeek}</Text>
        </View>
      </View>
    </View>
  );
}

export default BabyCard;
