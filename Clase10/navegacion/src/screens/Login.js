import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        email: '',
        username: '',
        password: '',
        };
  }

    onSubmit() {
        const { email, username, password } = this.state;
        console.log('Datos de registro:', { email, username, password });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ingresar</Text>

        <Pressable
          onPress={() => this.props.navigation.navigate('Register')}
          style={[styles.btn1, { marginBottom: 12 }]}
        >
          <Text style={styles.btnText}>No tengo cuenta</Text>
        </Pressable>

            <TextInput
            style={styles.field}
            keyboardType="email-address"
            placeholder="email"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            />
 
            <TextInput
            style={styles.field}
            keyboardType="default"
            placeholder="contraseña"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            />

            <Pressable style={styles.button} onPress={() => this.onSubmit()}>
            <Text style={styles.btnText}>Login</Text>
            </Pressable>

        <Pressable
          onPress={() => this.props.navigation.navigate('HomeMenu')}
          style={styles.btn2}
        >
          <Text style={styles.btnText}>Entrar en la app</Text>
        </Pressable>

            <View style={{ marginTop: 20 }}>
                <Text>Vista previa</Text>
                <Text>Email: {this.state.email}</Text>
                <Text>Usuario: {this.state.username}</Text>
                <Text>Contraseña: {this.state.password}</Text>
            </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch', padding: 16, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  btn1: { padding: 12, backgroundColor: '#7ca8dbff', borderRadius: 8, alignSelf: 'center' },
  btn2: { padding: 12, backgroundColor: '#dca930ff', borderRadius: 8, alignSelf: 'center' },
  btnText: { textAlign: 'center' },
  field: {
    height: 20,              
    paddingVertical: 15,    
    paddingHorizontal: 10,   
    borderWidth: 1,      
    borderColor: '#ccc',     
    borderStyle: 'solid',    
    borderRadius: 6,        
    marginVertical: 10,  
  },
  button: {
    backgroundColor: '#7ca8dbff', 
    padding: 12,      
    borderRadius: 8,                  
    marginBottom: 10,     
    alignSelf: 'center',
    marginTop: 10,
  }
});

export default Login;
