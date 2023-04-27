import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SignIn = () => {
  const [Username, onChangeUsername] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  const ResetForm = () => {
    onChangeUsername('');
    onChangeEmail('');
    onChangePassword('');
    console.log(`Username: ${Username}, Email: ${Email}, Password: ${Password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: '#000000',
          margin: 40,
          marginLeft: 40,
        }}>
        Welcome
      </Text>

      <Text style={styles.teks}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={Username}
        placeholder="Masukan Username Anda"
      />

      <Text style={styles.teks}>Password</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={Password}
        placeholder="Masukan Password Anda"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.login} onPress={ResetForm}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   fontSize: 24,
  //   fontStyle: 'bold',
  // },
  input: {
    marginBottom: 10,
    marginTop: 30,
    height: 40,
    marginTop: 10,
    marginLeft: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#ffffff',
  },
  login: {
    marginBottom: 10,
    marginTop: 30,
    height: 40,
    margin: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#ff7f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teks: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlignments: 'left',
    marginLeft: 40,
  },
});

export default SignIn;
