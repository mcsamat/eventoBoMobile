import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WebView from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hides the splash screen once the app is ready
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <WebView
        style={styles.web}
        originWhitelist={['*']}
        source={{
          uri: 'https://hosts.eventoapp.it/',
        }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  web: {flex: 1},
  main: {width: '100%', flex: 1},
});
