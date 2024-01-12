import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Navigation/tabs';
import themeContext from './Config/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import themes from './Config/themes';

const App = () => {
  const [mode, setMode] = useState('light');
  
  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });
  return(
    <themeContext.Provider value={mode === 'dark' ? themes.dark : themes.light}>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

export default App;
