import React, {useState, useContext} from 'react';
import {
  Appearance,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Switch,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../Config/themeContext';

const THEMES = [
  {
    id: null,
    icon: require('../assets/icons/auto.png'),
    title: 'Authomatic',
  },
  {
    id: 'light',
    icon: require('../assets/icons/light.png'),
    title: 'Light',
  },
  {
    id: 'dark',
    icon: require('../assets/icons/dark.png'),
    title: 'Dark',
  },
];
const checkIcon = require('../assets/icons/check.png');
const Item = ({theme, onPress, checkTint, background, border}) => (
  <Pressable
    onPress={onPress}
    style={{...styles.row, backgroundColor: background, borderColor: border}}>
    <View style={styles.themeRow}>
      <Image source={theme.icon} style={styles.themeImg} />
      <Text style={styles.themeText}>{theme.title}</Text>
    </View>
    <Image
      source={checkIcon}
      tintColor={checkTint}
      style={{...styles.themeImg, ...styles.switch}}
    />
  </Pressable>
);

const SettingScreen = ({navigation}) => {
  const [allowPreprocess, setPreprocess] = useState(false);
  const [allowNotifications, setNotifications] = useState();
  const [selectedTheme, setSelectedTheme] = useState(
    Appearance.getColorScheme(),
  );
  const theme = useContext(themeContext);
  const renderTheme = ({item}) => {
    const checkColor =
      selectedTheme === item.id ? theme.icon1 : theme.background1;
    return (
      <Item
        theme={item}
        onPress={() => {
          setSelectedTheme(item.id);
          EventRegister.emit('changeTheme', item.id);
        }}
        checkTint={checkColor}
        background={theme.background1}
        border={theme.border1}
      />
    );
  };
  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.default1}}>
      <Text style={{...styles.rowTitle, color: theme.text2}}>
        PRE-PROCESSING
      </Text>
      <View style={{...styles.row, backgroundColor: theme.background1}}>
        <Text style={styles.rowText}>Allow preprocessing</Text>
        <Switch
          value={allowPreprocess}
          onValueChange={() => setPreprocess(value => !value)}
          style={styles.switch}
        />
      </View>
      <Text style={styles.rowDescription}>
        Allow the app to process the image before submission
      </Text>

      <Text style={styles.rowTitle}>THEMES</Text>
      <View>
        <FlatList
          data={THEMES}
          renderItem={renderTheme}
          keyExtractor={item => item.id}
          extraData={selectedTheme}
          style={styles.themesContainer}
        />
      </View>
      <Text style={styles.rowDescription}>
        Authomatic mode is only supported on devices that allow system-wide
        control
      </Text>

      <Text style={styles.rowTitle}>NOTIFICATIONS</Text>
      <View style={styles.row}>
        <Text style={styles.rowText}>Allow notifications</Text>
        <Switch
          value={allowNotifications}
          onValueChange={() => setNotifications(value => !value)}
          style={styles.switch}
        />
      </View>
      <Text style={styles.rowDescription}>
        Allow the app to send realtime Notifications
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDierection: 'column',
  },
  themesContainer: {},
  rowTitle: {
    fontSize: 18,
    fontWeight: '100',
    paddingTop: 24,
    paddingBottom: 12,
    paddingLeft: 16,
  },
  rowText: {
    fontSize: 24,
    marginLeft: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 64,
    borderBottomWidth: 0.5,
    overflow: 'hidden',
  },
  rowDescription: {
    fontSize: 18,
    fontWeight: '100',
    paddingLeft: 16,
  },
  themeImg: {
    height: 42,
    width: 42,
    marginLeft: 16,
  },
  themeRow: {
    justifyContent: 'start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeText: {
    fontSize: 18,
    paddingLeft: 16,
  },
  switch: {
    marginRight: 24,
  },
});

export default SettingScreen;
