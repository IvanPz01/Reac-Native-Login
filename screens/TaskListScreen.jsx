import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Button } from 'react-native-paper';
import tasks from '../tasks.json';

export default function TaskListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <List.Item
      title={item.title}
      description={item.description}
      onPress={() => navigation.navigate('TaskView', { task: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button mode="contained" onPress={() => navigation.navigate('AddTask')}>
        Add Task
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
