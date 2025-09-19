import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import CookieManager from '@react-native-cookies/cookies';
import BabyCard from '../components/babycard';
import QuickTracker from '../components/quicktrackers';
import QuickReminders from '../components/quickreminders';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
function Home() {
  const [userData, setuserData] = useState(null);
  const [response, setResponse] = useState(false);
  const [remData, setRemData] = useState(null);
  const navigation = useNavigation();
  async function setToken() {
    const token = await AsyncStorage.getItem('token');

    CookieManager.set('https://sumomom-backend.vercel.app', {
      name: 'token',
      value: token,
      path: '/',
    });
  }
  async function homeData() {
    const res = await fetch('https://sumomom-backend.vercel.app/api/home', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const output = await res.json();
    console.log(output);
    setuserData(output);
    setResponse(true);
  }

  async function fetchReminders() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/reminders/fetchreminders',
      {
        method: 'GET',
        credentials: 'include',
      },
    );
    const output = await res.json();
    console.log(output);
    setRemData(output);
  }
  useEffect(() => {
    setToken();
    homeData();
    fetchReminders();
  }, []);
  return (
    <SafeAreaView className="bg-[#fef7f3] flex-1 ">
      {response === false ? (
        <View className="justify-center items-center flex-1">
          <LottieView
            source={require('../assets/loader/loading.json')}
            autoPlay
            loop
            style={{ height: 50, width: 50 }}
          ></LottieView>
        </View>
      ) : (
        <ScrollView className="p-5 flex-1">
          <View>
            <Text className="text-4xl">Hello, {userData?.firstName}</Text>
            <View className="flex-row">
              <Text className="text-2xl mt-1 mr-2.5">
                Week {userData?.currentWeek}
              </Text>
              <Text className="text-2xl mt-1">
                Trimster {userData?.data?.currentTrimester}
              </Text>
            </View>
          </View>

          <View className=" h-[20%]  rounded-lg elevation-sm mt-5">
            <BabyCard data={userData?.data} />
          </View>

          <View className="mt-5">
            <Text className="text-2xl">Quick Trackers</Text>
            <View className="flex-col mt-5">
              <View className="flex-row justify-around w-[100%]">
                <TouchableOpacity
                  className="w-[40%]"
                  onPress={() => {
                    navigation.navigate('WeightTracker', { userData });
                  }}
                >
                  <QuickTracker
                    img={require('../assets/images/weighticon.png')}
                    name="Weight"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  className="w-[40%]"
                  onPress={() => {
                    navigation.navigate('symptomsTracker');
                  }}
                >
                  <QuickTracker
                    img={require('../assets/images/symptoms.png')}
                    name="Symptoms"
                  />
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-around w-[100%]">
                <TouchableOpacity
                  className="w-[40%]"
                  onPress={() => {
                    navigation.navigate('MoodTracker');
                  }}
                >
                  <QuickTracker
                    img={require('../assets/images/mood.png')}
                    name="Mood"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  className="w-[40%]"
                  onPress={() => {
                    navigation.navigate('KickCounter');
                  }}
                >
                  <QuickTracker
                    img={require('../assets/images/kicks.png')}
                    name="Counter"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="mt-5">
            <Text className="text-2xl">Quick Reminders</Text>

            <View
              style={{
                flexDirection: 'column',
                backgroundColor: '#fff',
                padding: 10,
                height: 100,
                margin: 2,
                elevation: 1,
                borderRadius: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('remindersScreen', { remData });
                }}
              >
                {remData?.data?.Data?.length > 1 ? (
                  <>
                    <QuickReminders
                      remindertext={
                        remData?.data?.Data[remData?.data?.Data.length - 1]
                          .reminder
                      }
                    />
                    <QuickReminders
                      remindertext={
                        remData?.data?.Data[remData?.data?.Data.length - 2]
                          .reminder
                      }
                    />
                  </>
                ) : (
                  <QuickReminders
                    remindertext={
                      remData?.data?.Data[remData?.data?.Data.length - 1]
                        .reminder
                    }
                  />
                )}

                <View className="h-6"></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 180 }}></View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default Home;
