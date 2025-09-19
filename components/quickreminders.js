import React from 'react';

import { View, Text, Image } from 'react-native';

function QuickReminders(props) {
  return (
    <View
      style={{ flexDirection: 'row', marginBottom: 4, alignItems: 'center' }}
    >
      <Image
        source={require('../assets/images/remindericon.png')}
        style={{ height: 25, width: 25, marginRight: 5 }}
      ></Image>
      <Text className="text-xl">{props.remindertext}</Text>
    </View>
  );
}
export default QuickReminders;
