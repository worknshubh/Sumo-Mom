import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  ExpandableCalendar,
  WeekCalendar,
} from 'react-native-calendars';
import ButtonPrimary from '../components/button';
const moment = require('moment');
function MoodTracker() {
  const [selected, setSelected] = useState('');
  const [mood, setUsermood] = useState('');
  const [userNotes, setuserNotes] = useState(null);
  const [userMoodInfo, setUserMoodInfo] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [aiResp, setaiResp] = useState('AI Response');
  async function updateTobackend() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/tracker/moodtracker',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMood: mood,
          userNotes: userNotes,
        }),
      },
    );
    const output = await res.json();
    console.log(output);
    setaiResp(output.aiTip);
  }

  async function moodinfo() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/user/getusermooddata',
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const output = await res.json();
    console.log(output);
    setUserMoodInfo(output);
    const temp = {};
    output.data.Data.forEach(el => {
      temp[el.lastUpdatedDate] = { marked: true, dotColor: 'red' };
    });

    setMarkedDates(temp);
  }
  useEffect(() => {
    moodinfo();
  }, []);
  return (
    <ScrollView className="flex-1 bg-[#fef7f3]">
      <Calendar
        markingType="dot"
        collapsable
        current={moment().format('YYYY-MM-DD')}
        theme={{
          todayBackgroundColor: '#ebc7b3',
          todayTextColor: 'black',
          todayButtonTextColor: 'black',
          selectedDayBackgroundColor: '#ebc7b3',
        }}
        onDayPress={day => {
          console.log('selected day', day);
          setSelected(day.dateString);
          if (day.dateString in markedDates) {
            userMoodInfo.data.Data.forEach(el => {
              if (el.lastUpdatedDate === day.dateString) {
                setaiResp(el.aiTip);
                setuserNotes(el.userNotes);
                setUsermood(el.userMood);
              }
            });
          } else {
            setaiResp('AI Response');
            setUsermood(null);
            setuserNotes('No Notes Available');
          }
        }}
        markedDates={markedDates}
      />

      <View className="m-4 h-[20%]">
        <Text className="text-xl">How's Your Mood?</Text>
        <View className="justify-center items-center">
          <Text className="text-lg mt-2">{mood}</Text>
        </View>
        <View className="h-[55%] bg-white mt-3 flex-row rounded-2xl elevation-sm items-center justify-center">
          <TouchableOpacity
            className=""
            onPress={() => {
              setUsermood('Neutral');
            }}
          >
            <Image
              source={require('../assets/emojis/neutralemoji.png')}
              className="h-[50px] w-[50px] m-2"
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            className=""
            onPress={() => {
              setUsermood('Happy');
            }}
          >
            <Image
              source={require('../assets/emojis/smileemoji.png')}
              className="h-[50px] w-[50px] m-2"
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            className=""
            onPress={() => {
              setUsermood('Sad');
            }}
          >
            <Image
              source={require('../assets/emojis/sademoji.png')}
              className="h-[50px] w-[50px] m-2"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            className=""
            onPress={() => {
              setUsermood('Emotional');
            }}
          >
            <Image
              source={require('../assets/emojis/cryemoji.png')}
              className="h-[40px] w-[40px] m-2"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            className=""
            onPress={() => {
              setUsermood('Angry');
            }}
          >
            <Image
              source={require('../assets/emojis/angryemoji.png')}
              className="h-[40px] w-[40px] m-2"
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mx-4 my-2 bg-white p-4">
        <Text>{aiResp}</Text>
      </View>
      <View className="m-4 mt-1">
        <Text className="text-xl">Add Note</Text>
        <View className="flex-row bg-white justify-between p-2 mt-2">
          <TextInput
            placeholder="Add a note"
            placeholderTextColor="#aaaaaa"
            className="color-black text-2xl w-[90%]"
            value={userNotes}
            onChangeText={text => {
              setuserNotes(text);
            }}
          ></TextInput>
        </View>
      </View>
      <View className="p-4">
        <ButtonPrimary name="Update Mood" redirectnow={updateTobackend} />
      </View>
      <View className="" style={{ height: 50 }}></View>
    </ScrollView>
  );
}

export default MoodTracker;
