import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProcessScreen from '../screens/ProcessScreen';
import SettingScreen from '../screens/SettingScreen';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const homeIcon = require('../assets/icons/leaf.png');
  const processIcon = require('../assets/icons/process.png');
  const settingIcon = require('../assets/icons/settings.png');
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        style: {
          backgroundColor: '#f8f8f8',
        },}}
      initialRouteName='Home'
      >
      <Tab.Screen
        name="Process"
        component={ProcessScreen}
        options={{
          tabBarIcon: ({focused}) =>
            Iconstyle(focused, processIcon, 'PROCESS'),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            Iconstyle(focused, homeIcon, 'HOME'),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            Iconstyle(focused, settingIcon, 'SETTINGS'),
        }}
      />
    </Tab.Navigator>
  );
};

function Iconstyle(focuss, imgSrc, label) {
  console.log(imgSrc);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
      <Image
        source={imgSrc}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focuss ? '#81B337' : '#333333',
        }}
      />
      <Text style={{color: focuss ? '#81B337' : '#333333', fontSize: 12}}>
        {label}
      </Text>
    </View>
  );
}

export default Tabs;
