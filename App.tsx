import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomeComponent/HomeComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131821',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
