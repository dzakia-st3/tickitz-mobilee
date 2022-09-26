// import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider  } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store'
import MainNavigation from './src/MainNavigation'
import OneSignal from 'react-native-onesignal';
import SplashScreen from 'react-native-splash-screen';

const data = [
  {
    id_user: 1,
    first_name: 'milo'
  }, 
  { 
    id_user: 2,
    first_name: 'choco'
  }
]

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  },[])

  useEffect(() => {
    OneSignal.setAppId("80b9b5e1-6865-4f56-9ea0-b7ca1fe33f01");
  }, [])

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App


