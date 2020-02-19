import React from 'react';
import { Image, AsyncStorage, Clipboard, Alert } from 'react-native';
import { View, Text, Container } from 'native-base';
import { connect } from 'react-redux';
import { signOut } from '@okta/okta-react-native';
// import { setIsUserAuthenticated, setUserEmail, setDeviceId, fetchLocationsZones, setLocationsZones, resetState } from '../actions';
// import { routeKeys } from '../config/constants';
import colors from '../config/colors';
import fonts from '../config/fonts';
import Auth from '../auth/Auth'
// import { getEmail, getAuthRole } from '../selectors';
// import store from '../store';

class SplashScreen extends React.Component {
  willFocusCallBack: any;

  render() {
    return (
      <Container style={styles.splashContainer}>
        <View><Text style={styles.viewStyles}>Splash screen</Text></View>
        <Auth></Auth>
      </Container>
    );
  }
}

const styles = {
  splashContainer: {
    backgroundColor: colors.$splash,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  viewStyles: {
    textAlign: 'center',
    color: colors.$white,
    fontSize: 20,
  },
}

export default SplashScreen;

