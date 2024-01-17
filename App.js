import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Details from './screens/Details';
import Calendar from './screens/Calendar';
import HealthTracker from './screens/HealthTracker';
import Notifications from './screens/Notifications';
import Encyclopedia from './screens/Encyclopedia';
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export default function App() {
  let isLoggedIn = true;
  if (!isLoggedIn)
  {
    return ( <LoginScreen></LoginScreen> );
  } else {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'forestgreen'} size={20} />
          ),
        }} />
        <Tab.Screen name="Details" component={Details} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-horizontal" color={'forestgreen'} size={20} />
          ),
        }}/>
        <Tab.Screen name="Calendar" component={Calendar} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={'forestgreen'} size={20} />
          ),
        }} />
        <Tab.Screen name="Health Tracker" component={HealthTracker}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pulse" color={'forestgreen'} size={20} />
          ),
        }} />
        <Tab.Screen name="Notifications" component={Notifications}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={'forestgreen'} size={20} />
          ),
        }} />
        <Tab.Screen name="Encyclopedia" component={Encyclopedia}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={'forestgreen'} size={20} />
          ),
        }} />
        <Tab.Screen name="Settings" component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={'forestgreen'} size={20} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
