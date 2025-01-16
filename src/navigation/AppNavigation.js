import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import SplashScreen from '../screens/SplashScreen';  
import HomeScreen from '../screens/HomeScreen';      
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconSource;

        if (route.name === 'Home') {
          iconSource = focused
            ? require('./home.png') 
            : require('./home.png'); 
        } else if (route.name === 'Search') {
          iconSource = focused
            ? require('./search.png') 
            : require('./search.png'); 
        }

        return (
          <Image
            source={iconSource}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? '#2f95dc' : '#8e8e93', 
            }}
          />
        );
      },
      tabBarLabel: ({ focused }) => (
        <Text style={{ color: focused ? '#2f95dc' : '#8e8e93', fontSize: 12 }}>
          {route.name}
        </Text>
      ),
      tabBarStyle: {
        height: 60, 
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Search" component={SearchScreen} />
  </Tab.Navigator>
);

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={AppTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
