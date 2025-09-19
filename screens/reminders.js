import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonPrimary from '../components/button';
import ReminderCard from '../components/reminderCard';
import { useRoute } from '@react-navigation/native';
function RemindersScreen() {
  const [isOpen, setisOpen] = useState(false);
  const router = useRoute();
  const data = router.params;
  const [reminder, setReminder] = useState(null);
  const [remData, setRemData] = useState(null);
  async function sendTobackend() {
    const res = await fetch(
      'https://sumomom-backend.vercel.app/api/reminders/addreminder',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          reminder: reminder,
        }),
      },
    );
    const output = await res.json();
    console.log(output);
    setisOpen(false);
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
    fetchReminders();
  }, [isOpen]);
  return (
    <SafeAreaView className="relative flex-1 bg-[#fef7f3]">
      <Modal
        visible={isOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setisOpen(false);
        }}
      >
        <View className="bg-white w-[90%] justify-center items-center  m-auto rounded-lg p-2">
          <Text className="text-2xl">Set Reminder</Text>
          <TextInput
            placeholder="Add a Reminder"
            placeholderTextColor="#000000"
            className="border-b-2 w-[95%] border-[#f67280] my-5 color-black"
            style={{ borderBottomWidth: 1 }}
            value={reminder}
            onChangeText={text => {
              setReminder(text);
            }}
          ></TextInput>
          <View className="flex-row w-[100%] justify-end mb-4">
            <View className="mx-2">
              <ButtonPrimary
                name="Cancel"
                redirectnow={() => {
                  setisOpen(false);
                }}
              ></ButtonPrimary>
            </View>

            <View className="mx-2">
              <ButtonPrimary
                name="Add"
                redirectnow={sendTobackend}
              ></ButtonPrimary>
            </View>
          </View>
        </View>
      </Modal>
      {/* // here to add remainders */}
      <View>
        {console.log(remData?.data?.Data)}
        <FlatList
          data={remData?.data?.Data}
          renderItem={({ item }) => <ReminderCard remindertext={item} />}
        />
      </View>
      <View className="absolute bottom-0 right-0 mb-[10%] mr-[5%]">
        <TouchableOpacity
          onPress={() => {
            setisOpen(true);
          }}
        >
          <View className="bg-[#F67280] p-5 rounded-full">
            <Text className="text-5xl p-2 px-4">+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RemindersScreen;
