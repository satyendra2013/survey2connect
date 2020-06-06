import React, { useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { navigation } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const logo = require('../../assets/logo.png');

const SigninScreen = () => {
  const { state, signin } = useContext(Context);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <AuthForm
        submitButtonText='Login'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        loading={state.loading}
      />
      <NavLink text='Forgot Password?' routeName='#' />
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Text style={styles.noAccount}>Don't have an account?</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Login id and password to be generated from survey2connect.com. If you
        are an agent or not the main account user, please reach out to the
        management to get your log in details.
      </Text>
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 45,
    width: 310,
    alignSelf: 'center',
    marginBottom: 40,
  },
  noAccount: {
    color: 'black',
    marginLeft: 35,
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 35,
    marginRight: 5,
    marginTop: 5,
    textAlign: 'left',
  },
});

export default SigninScreen;
