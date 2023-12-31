import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomeComponent/HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/SignUp/SignUp';
import { RecoilRoot, useSetRecoilState } from "recoil";
import { registerRootComponent } from 'expo';
import { MainComponent } from './components/MainComponent/MainComponent';
import { AvatarSelection } from './components/AvatarSelection/AvatarSelection';

export type AppStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword : undefined;
  Main: undefined;
  AvatarSelection: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
export default function App() {
  
  
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='AvatarSelection' screenOptions={{
            headerTitle: '', headerBackVisible: false, navigationBarHidden: true, gestureEnabled: false
            , headerStyle: {
              backgroundColor: 'white'
            },
            animationDuration: 500,
            animation: 'fade'
          }}>
            <Stack.Screen
              name="Home"
              component={HomePage}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: 'Login' }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: 'SignUp' }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={SignUp}
              options={{ title: 'ForgotPassword' }}
            />
            <Stack.Screen
              name="Main"
              component={MainComponent}
              options={{ title: 'Main' }}
            />
            <Stack.Screen
              name="AvatarSelection"
              component={AvatarSelection}
              options={{ title: 'AvatarSelection' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RecoilRoot>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColr: '#131821',
    height: '100%',
    width: '100%'
  },
});
