import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
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
function SymptomsTracker() {
  const [selected, setSelected] = useState('');
  const [symptom, selectSymptom] = useState(null);
  const [userNotes, setUserNotes] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [symptomData, setSymptomData] = useState(null);

  async function sendTobackend() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/tracker/symptomstracker',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptomName: symptom,
          userNotes: userNotes,
        }),
      },
    );
    const output = await res.json();
    console.log(output);
  }

  async function fetchSymptoms() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/user/getusersymptomsdata',
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
    setSymptomData(output);
    setUserNotes(null);
    const temp = {};
    output.data.Data.forEach(el => {
      temp[el.lastUpdatedDate] = { marked: true, dotColor: 'red' };
    });
    setMarkedDates(temp);
  }

  useEffect(() => {
    fetchSymptoms();
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
            symptomData.data.Data.forEach(el => {
              if (el.lastUpdatedDate === day.dateString) {
                selectSymptom(el.symptomName), setUserNotes(el.userNotes);
              }
            });
          } else {
            selectSymptom(null);
            setUserNotes('No Notes Available');
          }
        }}
        markedDates={markedDates}
      />
      <View className="p-4">
        <Text className="text-xl">Symptoms</Text>
      </View>
      <View className="flex-row flex-wrap">
        <TouchableOpacity
          onPress={() => {
            selectSymptom('Nausea');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Nausea'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Nausea</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            selectSymptom('Back Pain');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Back Pain'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Back Pain</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            selectSymptom('Fatigue');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Fatigue'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Fatigue</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            selectSymptom('Headache');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Headache'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Headache</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            selectSymptom('Mood Swings');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Mood Swings'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Mood Swings</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            selectSymptom('Food Cravings');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Food Cravings'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Food Cravings</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            selectSymptom('Swellings');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Swellings'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Swellings</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            selectSymptom('Dizziness');
          }}
        >
          <View className=" p-4">
            <View
              className=" p-4 rounded-lg "
              style={
                symptom === 'Dizziness'
                  ? { backgroundColor: '#E06D84' }
                  : { backgroundColor: 'transparent', borderWidth: 1 }
              }
            >
              <Text className="text-lg">Dizziness</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View className="flex-row p-2 w-[100%] justify-around mt-3 bg-white">
        <TextInput
          placeholder="Add Notes"
          className=" w-[70%] p-2 rounded-md text-lg text-black"
          placeholderTextColor="#000000"
          value={userNotes}
          onChangeText={text => {
            setUserNotes(text);
          }}
        ></TextInput>
        <ButtonPrimary name="Update" redirectnow={sendTobackend} />
      </View>

      <View className="p-4 mt-4">
        <ButtonPrimary name="Emergency Call" />
      </View>

      <View style={{ height: 40 }}></View>
    </ScrollView>
  );
}

export default SymptomsTracker;
