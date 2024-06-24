import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function TaskViewScreen({ route, navigation }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>{`Author: ${task.author}`}</Text>
      <Text>{`Date: ${task.date}`}</Text>
      <Button mode="contained" onPress={() => navigation.navigate('EditTask')}>
        Edit Task
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
