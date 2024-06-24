import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      statusBarTranslucent: true,
      navigationBarHidden: true,
    }}>
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
