import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';
import ButtonPrimary from '../components/button';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
// import { TextInput } from 'react-native/types_generated/index';
function SignupScreen() {
  const navigation = useNavigation();
  const [pressedOnnext, setpressedOnnext] = useState(false);
  const [physicalActivity, setPhysicalactivity] = useState(null);
  const [diet, setUserdiet] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/signuppage.png')}
        className="flex-1 bg-cover justify-between p-8"
        style={{ flex: 1 }}
      >
        <View
          className="flex-1 justify-between"
          style={
            pressedOnnext === true ? { display: 'none' } : { display: 'flex' }
          }
        >
          <View>
            <Text className="text-3xl font-bold">You are One Step Away</Text>
            <Text>From Becoming a Sumo Mom</Text>
          </View>

          <View>
            <TextInput
              placeholderTextColor="#000"
              className="text-lg border-b-2 border-black my-5 text-black"
              placeholder="Enter Your Full Name"
            ></TextInput>
            <TextInput
              placeholderTextColor="#000"
              className="text-lg border-b-2 border-black my-5 text-black"
              keyboardType="number-pad"
              placeholder="Enter Your Mobile Number"
            ></TextInput>

            <View className="flex flex-row justify-around">
              <TextInput
                placeholderTextColor="#000"
                className="text-lg border-b-2 border-black my-5 text-black w-[40%]"
                placeholder="Your Current Age"
                keyboardType="number-pad"
              ></TextInput>

              <TextInput
                placeholderTextColor="#000"
                className="text-lg border-b-2 border-black my-5 text-black w-[50%]"
                placeholder="Your Height in cm"
                keyboardType="number-pad"
              ></TextInput>
            </View>
            <View className="flex flex-row justify-around">
              <TextInput
                placeholderTextColor="#000"
                className="text-lg border-b-2 border-black my-5 text-black w-[50%]"
                placeholder="Pre-pregnancy Weight"
                keyboardType="number-pad"
              ></TextInput>

              <TextInput
                placeholderTextColor="#000"
                className="text-lg border-b-2 border-black my-5 text-black w-[40%]"
                placeholder="Current Weight"
                keyboardType="number-pad"
              ></TextInput>
            </View>
            <Text
              className="text-lg border-b-2 border-black my-5 text-black p-2"
              onPress={() => {
                setOpen(true);
              }}
            >
              {moment(date).isSame(moment(), 'day')
                ? 'Last Menstrual Period Date'
                : moment(date).format('DD MMM YYYY')}
            </Text>
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <TextInput
              placeholderTextColor="#000"
              className="text-lg border-b-2 border-black my-5 text-black"
              keyboardType="number-pad"
              placeholder="Number of pregnancies"
            ></TextInput>
          </View>

          <View>
            <ButtonPrimary
              name="Next"
              redirectnow={() => {
                setpressedOnnext(true);
              }}
            ></ButtonPrimary>
            <Text
              className="my-4 text-center text-white font-semibold active:opacity-45"
              onPress={() => {
                navigation.replace('Login');
              }}
            >
              Already a Sumo Mom?
            </Text>
          </View>
        </View>

        <View
          className="flex-1 justify-between "
          style={
            pressedOnnext === false ? { display: 'none' } : { display: 'flex' }
          }
        >
          <View>
            <Text className="text-3xl font-bold">Lifestyle & Preferences</Text>
            <Text>Of Our Sumo Mom</Text>
          </View>
          <View>
            <View>
              <Text className="text-xl my-2 text-center">Diet Type</Text>
              <View className="flex flex-row flex-wrap justify-around">
                <TouchableOpacity
                  className="bg-transparent px-6 py-2 rounded-md border-[#E06D84] border-2"
                  onPress={() => {
                    setUserdiet('Veg');
                  }}
                  style={
                    diet === 'Veg'
                      ? { backgroundColor: '#E06D84' }
                      : { backgroundColor: 'transparent' }
                  }
                >
                  <Text className=" text-black ">Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-transparent px-6 py-2 rounded-md border-[#E06D84] border-2"
                  onPress={() => {
                    setUserdiet('Non Veg');
                  }}
                  style={
                    diet === 'Non Veg'
                      ? { backgroundColor: '#E06D84' }
                      : { backgroundColor: 'transparent' }
                  }
                >
                  <Text className=" text-black ">Non Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-transparent px-6 py-2 rounded-md border-[#E06D84] border-2"
                  onPress={() => {
                    setUserdiet('Vegan');
                  }}
                  style={
                    diet === 'Vegan'
                      ? { backgroundColor: '#E06D84' }
                      : { backgroundColor: 'transparent' }
                  }
                >
                  <Text className=" text-black ">Vegan</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TextInput
              placeholderTextColor="#000"
              className="text-lg border-b-2 border-black my-5 text-black"
              placeholder="Any allergies (milk, nuts, gluten, etc.)?"
            ></TextInput>

            <TextInput
              placeholderTextColor="#000"
              className="text-lg border-b-2 border-black my-5 text-black"
              placeholder="Occupation (working/housewife)"
            ></TextInput>

            <View>
              <Text className="text-xl my-2 text-center">
                Physical Activity
              </Text>
              <View className="flex flex-row flex-wrap justify-around">
                <TouchableOpacity
                  className="bg-transparent px-6 py-2 rounded-md border-[#E06D84] border-2 "
                  onPress={() => {
                    setPhysicalactivity('Low');
                  }}
                  style={
                    physicalActivity === 'Low'
                      ? { backgroundColor: '#E06D84' }
                      : { backgroundColor: 'transparent' }
                  }
                >
                  <Text className=" text-black ">Low</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-transparent px-6 py-2 rounded-md border-[#E06D84] border-2 "
                  onPress={() => {
                    setPhysicalactivity('Moderate');
                  }}
                  style={
                    physicalActivity === 'Moderate'
                      ? { backgroundColor: '#E06D84' }
                      : { backgroundColor: 'transparent' }
                  }
                >
                  <Text className=" text-black ">Moderate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-transparent px-6 py-2 rounded-md border-[#E06D84] border-2 "
                  onPress={() => {
                    setPhysicalactivity('High');
                  }}
                  style={
                    physicalActivity === 'High'
                      ? { backgroundColor: '#E06D84' }
                      : { backgroundColor: 'transparent' }
                  }
                >
                  <Text className=" text-black ">High</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              placeholderTextColor="#000"
              className="text-lg border-b-2 border-black my-5 text-black"
              placeholder="Set Your Password"
            ></TextInput>
          </View>
          <View>
            <ButtonPrimary
              name="Submit"
              redirectnow={() => {
                navigation.replace('GettingStarted');
              }}
            ></ButtonPrimary>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SignupScreen;
