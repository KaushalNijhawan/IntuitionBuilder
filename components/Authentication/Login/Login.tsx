import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, Dimensions, Image } from "react-native";
import { AppStackParamList } from "../../../App";
import { Button } from "@rneui/themed";
import { Card, Input } from "@rneui/base";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'Login'>;
};
const Login: React.FC<HomeScreenProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string>();
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const [password, setPassword] = useState<string>();
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#131821'
            },

        })
    }, []);

    const handleRegister = () => {
        navigation.navigate('SignUp');
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#131821',
                height: screenHeight, width: '100%'
            }}>
                <View style={{ width: '100%', height: ((screenHeight * 12) / 100), flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../HomeComponent/logo.jpg')} style={{ height: '50%', width: '40%', resizeMode: 'contain' }} />
                </View>
                <View style={{
                    width: '100%', height: ((screenHeight * 88) / 100), backgroundColor: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                    borderRadius: 20
                }}>
                    <Text style={{ color: 'black', fontSize: 20, marginTop:'5%', marginBottom:'5%' }}>Please Login with an Email!</Text>
                    <Input placeholder="Email..." textContentType={"name"} inputStyle={{ color: 'black' }} onChange={(e) => console.log(e)} />
                    <Input placeholder="Password..." secureTextEntry = {true} textContentType="password" inputStyle={{ color: 'black' }} onChange={(e) => console.log(e)} />
                    <Button title={'Login'} color={'primary'} style={{ width: (screenWidth * 75) / 100 }} radius={10}/>
                    <Text>Or</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '8%' }}>
                        <Text style={{marginRight:'1%'}}>Already have Account</Text>
                        <Text style={{ textDecorationLine: 'underline', color: 'orange' }} onPress={handleRegister}>Register</Text>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;