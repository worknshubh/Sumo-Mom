import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
const moment = require('moment');
import {
  Calendar,
  CalendarList,
  Agenda,
  ExpandableCalendar,
  WeekCalendar,
} from 'react-native-calendars';
import '../global.css';
import ButtonPrimary from '../components/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
function WeightTracker() {
  const [selected, setSelected] = useState('');
  const [userData, setUserData] = useState(null);
  const [userWeightInfo, setuserWeightInfo] = useState(null);
  const [userWeight, setUserWeight] = useState(null);
  const [userNotes, setUserNotes] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  async function userInfo() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/user/getuserdata',
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
    setUserData(output);
  }

  async function weightInfo() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/user/getuserweightinfo',
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
    setuserWeightInfo(output);
    const temp = {};
    output.data.Data.forEach(el => {
      temp[el.lastUpdatedDate] = { marked: true, dotColor: 'red' };
    });

    setMarkedDates(temp);
  }

  async function updateTobackend() {
    if (userWeight != null) {
      const res = await fetch(
        'https://sumomom-backend.vercel.app/api/tracker/weighttracker',
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            updatedWeight: Number(userWeight),
            userNotes: userNotes,
          }),
        },
      );
      const output = await res.json();
      console.log(output);
      setUserWeight(null);
      setUserNotes(null);
    } else {
    }
  }
  useEffect(() => {
    userInfo();
    weightInfo();
  }, [userWeight]);
  return (
    <SafeAreaView className="bg-[#fef7f3] flex-1">
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
            userWeightInfo.data.Data.forEach(el => {
              if (el.lastUpdatedDate === day.dateString) {
                setUserWeight(el.updatedWeight.toString());
                setUserNotes(el.userNotes);
                console.log(el.updatedWeight);
              } else {
              }
            });
          }
        }}
        markedDates={markedDates}
      />
      {/* {console.log(moment().format('YYYY-MM-DD'))} */}
      {/* {console.log(markedDates)} */}
      <View className="elevation-2xl h-[15%] w-[100%]">
        <View
          className="flex-row m-5 bg-white h-[100%] justify-around items-center rounded-2xl"
          style={{}}
        >
          <Image
            source={require('../assets/images/weighticon.png')}
            className=""
            style={{ height: 80, width: 80 }}
          ></Image>

          <View className="justify-center items-center h-[100%] w-[60%]">
            <Text className="text-2xl">Current Weight</Text>
            <Text className="text-lg">{userData?.data?.currentWeight} Kg</Text>

            <Text className="text-center">
              {
                userWeightInfo?.data?.Data[
                  userWeightInfo?.data?.Data?.length - 1
                ].aiTip
              }
            </Text>
          </View>
        </View>
      </View>

      <View className="m-4 mt-10">
        <Text className="text-xl">Update Weight</Text>
        <View className="flex-row bg-white justify-between p-2 mt-2">
          <TextInput
            placeholder="Enter Updated Weight"
            placeholderTextColor="#aaaaaa"
            keyboardType="number-pad"
            className="color-black text-2xl w-[70%]"
            value={userWeight}
            onChangeText={text => {
              setUserWeight(text);
            }}
          ></TextInput>
          <ButtonPrimary
            name="Update"
            redirectnow={updateTobackend}
          ></ButtonPrimary>
        </View>
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
              setUserNotes(text);
            }}
          ></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WeightTracker;
