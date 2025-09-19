import React from 'react';
import { View, Text, Image } from 'react-native';

function QuickTracker(props) {
  return (
    <View className="bg-white p-4 justify-center items-center rounded-lg m-2">
      <Image source={props.img} style={{ height: 50, width: 50 }}></Image>
      <Text className="text-xl mt-2">{props.name}</Text>
    </View>
  );
}

export default QuickTracker;
