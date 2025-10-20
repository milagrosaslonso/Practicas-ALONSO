import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>
      
      <Pressable
        style={styles.btnBlue}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.btnText}>No tengo cuenta</Text>
      </Pressable>

      <Pressable style={styles.btnYellow}
        onPress={() => navigation.navigate('HomeMenu')}>
        <Text style={styles.btnText}>Entrar en la app</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#333',
    marginBottom: 15,
  },
  btnBlue: {
    backgroundColor: '#61bdf0',
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  btnYellow: {
    backgroundColor: '#f5a623',
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login
