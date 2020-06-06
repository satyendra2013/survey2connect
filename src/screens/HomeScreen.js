import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login successful!</Text>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home',
  tabBarIcon: <AntDesign name='home' size={24} color='black' />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default HomeScreen;
