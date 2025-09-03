import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import '../global.css';
function ButtonPrimary(props) {
  return (
    <TouchableOpacity
      onPress={props.redirectnow}
      className="bg-[#FFCBCB] p-4 rounded-lg elevation-sm"
    >
      <Text className="text-lg text-center text-black">{props.name}</Text>
    </TouchableOpacity>
  );
}

export default ButtonPrimary;
