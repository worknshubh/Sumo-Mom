import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  ExpandableCalendar,
  WeekCalendar,
} from 'react-native-calendars';
import ButtonPrimary from '../components/button';
const moment = require('moment');
function KickCounter() {
  const [kickData, setKickData] = useState(null);
  const [selected, setSelected] = useState('');
  const [currentkickdata, setcurrentkickdata] = useState(0);
  const [markedDates, setmarkedDates] = useState({});
  async function fetchKickData() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/user/getuserkickdata',
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const output = await res.json();
    setKickData(output);

    output.data.Data.forEach(el => {
      if (el.lastUpdatedDate === moment().format('YYYY-MM-DD')) {
        setcurrentkickdata(el.kickCount);
      }
    });
    const temp = {};
    output.data.Data.forEach(el => {
      temp[el.lastUpdatedDate] = { marked: true, dotColor: 'red' };
    });
    setmarkedDates(temp);
  }
  async function incrementinkicks() {
    setcurrentkickdata(currentkickdata + 1);
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/tracker/kickcounter',
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kickCount: Number(currentkickdata + 1),
          userNotes: 'null',
        }),
      },
    );

    const output = await res.json();
    console.log(output);
  }
  useEffect(() => {
    fetchKickData();
  }, []);
  return (
    <View className="flex-1 bg-[#fef7f3]">
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
            kickData.data.Data.forEach(el => {
              if (day.dateString === el.lastUpdatedDate) {
                setcurrentkickdata(el.kickCount.toString());
              }
            });
          } else {
            setcurrentkickdata(0);
          }
        }}
        markedDates={markedDates}
      />

      <View className="m-4">
        <Text className="text-xl">Update Baby Kicks</Text>
        <View className="flex-row mt-2 bg-white rounded-2xl elevation-sm items-center justify-around">
          <Image
            source={require('../assets/images/kicks.png')}
            className=""
            style={{ height: 120, width: 120 }}
          ></Image>
          <View className="flex-row items-center">
            <Text className="text-7xl text-[#aaa] mr-5">{currentkickdata}</Text>
            <ButtonPrimary name="+" redirectnow={incrementinkicks} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default KickCounter;
