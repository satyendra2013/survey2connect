import React, { useState } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import { Input, Button } from 'react-native-elements';

const AuthForm = ({ errorMessage, onSubmit, submitButtonText, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(errorMessage);
  const showError = () => {
    ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
  };

  return (
    <>
      <View style={styles.formView}>
        <Input
          placeholder='Email Id or Mobile No.'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Input
          secureTextEntry
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <View style={styles.btnView}>
          <Button
            title={submitButtonText}
            onPress={() => onSubmit({ email, password })}
            loading={loading}
          />
        </View>
      </View>
      {errorMessage ? showError() : null}
    </>
  );
};

const styles = StyleSheet.create({
  formView: {
    marginLeft: 20,
    marginRight: 20,
  },
  btnView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

export default AuthForm;
