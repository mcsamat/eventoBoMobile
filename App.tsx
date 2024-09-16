import {BackHandler, Platform, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';

import SplashScreen from 'react-native-splash-screen';
import WebView from 'react-native-webview';

const App = () => {
  const webviewRef = useRef(null);

  useEffect(() => {
    SplashScreen.hide(); // Hides the splash screen once the app is ready

    if (Platform.OS === 'android') {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (webviewRef.current) {
            webviewRef.current.goBack(); // Navigate back in WebView if possible
            return true; // Prevent default behavior (closing the app)
          }
          return false; // If no history to go back to, allow default behavior (closing the app)
        },
      );

      return () => backHandler.remove(); // Clean up the event listener
    }
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <WebView
        ref={webviewRef}
        style={styles.web}
        originWhitelist={['*']}
        source={{uri: 'https://hosts.eventoapp.it/'}}
        onNavigationStateChange={navState => {
          if (webviewRef.current && !navState.canGoBack) {
            // BackHandler.exitApp(); // Close the app if no more history to go back to
          }
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
