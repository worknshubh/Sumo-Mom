import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function ReminderCard(props) {
  const [makeHidden, setMakeHidden] = useState(false);
  async function sendTobackend() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/reminders/deletereminder',
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postID: props.remindertext._id,
        }),
      },
    );
    const output = await res.json();
    setMakeHidden(true);
  }
  return (
    <View
      className="flex-row w-[90%] m-auto p-4 bg-[#FFB5B5] rounded-lg h-20 items-center my-2 justify-between "
      style={makeHidden === true ? { display: 'none' } : { display: 'flex' }}
    >
      <View>
        <Text>{props.remindertext.reminder}</Text>
      </View>

      <View style={{}}>
        <TouchableOpacity onPress={sendTobackend}>
          <Image
            source={require('../assets/icons/delete.png')}
            style={{ height: 30, width: 30, tintColor: '#fff' }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ReminderCard;
