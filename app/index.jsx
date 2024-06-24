import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './../screens/LoginScreen';
import WelcomeScreen from './../screens/WelcomeScreen';
import TaskListScreen from './../screens/TaskListScreen';
import TaskViewScreen from './../screens/TaskViewScreen';
import AddTaskScreen from './../screens/AddTaskScreen';
import EditTaskScreen from './../screens/EditTaskScreen';
import SettingsScreen from './../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="TaskList" component={TaskListScreen} />
          <Stack.Screen name="TaskView" component={TaskViewScreen} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
          <Stack.Screen name="EditTask" component={EditTaskScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
