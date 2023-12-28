import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrasructure/theme'
import { useFonts as useOswaldFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLatoFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: {
    "0": 'ios-restaurant',
    "1": 'ios-restaurant-outline'
  },
  Map: {
    "0": 'map-sharp',
    "1": 'map-outline'
  },
  Settings: {
    "0": 'ios-settings',
    "1": 'ios-settings-outline'
  },
}


const createScreenOptions = ({ route }) => {
  const IconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ focused, color, size }) => {
      icon_name = focused ? IconName["0"] : IconName["1"];
      return <Ionicons name={icon_name} size={size} color={color} />
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }

}


const Settings = () => <Text>Settings</Text>;
const Map = () => <Text>Map</Text>;


export default function App() {
  const [oswaldLoaded] = useOswaldFonts({
    Oswald_400Regular
  })
  const [latoLoaded] = useLatoFonts({
    Lato_400Regular
  })


  if (!latoLoaded || !oswaldLoaded) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style='auto' />
    </>




  );
}


