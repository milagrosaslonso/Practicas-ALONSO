import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class Register extends Component {

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
            <Text style={styles.title}>Registro</Text>
            
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
            placeholder="usuario"
            onChangeText={(text) => this.setState({ username: text })}
            value={this.state.username}
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
            <Text style={styles.buttonText}>Registrate</Text>
            </Pressable>

            <Pressable
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.btn}
            >
            <Text style={styles.btnText}>Ya tengo cuenta</Text>
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
  btn: { padding: 12, backgroundColor: '#7ca8dbff', borderRadius: 8, alignSelf: 'center' },
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
  },
  buttonText: {           
    textAlign: 'center',        
  },
});

export default Register;
