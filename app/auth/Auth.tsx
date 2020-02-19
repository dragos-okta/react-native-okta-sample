import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { createConfig, signIn, signOut, isAuthenticated, getUser, getUserFromIdToken, getAccessToken, EventEmitter } from '@okta/okta-react-native';
import configFile from './auth.config';
import ButtonClass from '../components/Button';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  async componentDidMount() {
    EventEmitter.removeAllListeners('signInSuccess');
    EventEmitter.removeAllListeners('signOutSuccess');
    EventEmitter.removeAllListeners('onError');
    EventEmitter.removeAllListeners('onCancelled');
    let that = this;
    let accessToken = '';
    EventEmitter.addListener('signInSuccess', function (e: Event) {
      that.setState({ authenticated: true });
    });
    EventEmitter.addListener('signOutSuccess', function (e: Event) {
      that.setState({ authenticated: false });
    });
    EventEmitter.addListener('onError', function (e: Event) {
      console.warn(e);
    });
    EventEmitter.addListener('onCancelled', function (e: Event) {
      console.warn(e);
    });
    await createConfig({
      clientId: configFile.oidc.clientId,
      redirectUri: configFile.oidc.redirectUri,
      endSessionRedirectUri: configFile.oidc.endSessionRedirectUri,
      discoveryUri: configFile.oidc.discoveryUri,
      scopes: configFile.oidc.scopes,
      requireHardwareBackedKeyStore: configFile.oidc.requireHardwareBackedKeyStore,
    });
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    await this.checkAuthentication();
  }

  async checkAuthentication() {
    const result = await isAuthenticated();
    const { authenticated } = this.state;
    if (result.authenticated !== authenticated) {
      this.setState({ authenticated: result.authenticated });
    }
  }

  async login() {
    await signIn();
  }

  async logout() {
    await signOut();
  }

  render() {
    const { authenticated } = this.state;
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          {authenticated ? (
            <ButtonClass
              btnstyle={'solid'}
              testID="logoutButton"
              onPress={async () => { this.logout() }}
              btnTitle="LOGOUT"
            />
          ) : (
              <ButtonClass
                btnstyle={'solid'}
                testID="loginButton"
                onPress={async () => { this.login() }}
                btnTitle="LOGIN"
              />
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    bottom: 0,
    marginBottom: 20,
    width: '100%',
  }
});
