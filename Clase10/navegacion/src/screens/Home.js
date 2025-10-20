import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DynamicForm from '../components/DynamicForm';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Home</Text>
      <Text style={styles.subtitle}>Formulario de Home</Text>
      <DynamicForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16, opacity: 0.7 },
});
