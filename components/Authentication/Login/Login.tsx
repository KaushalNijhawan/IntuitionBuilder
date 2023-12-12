import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, Dimensions, Image } from "react-native";
import { AppStackParamList } from "../../../App";
import { Button } from "@rneui/themed";
import { Card, Input } from "@rneui/base";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from "../../Database/Firebase";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'Login'>;
};
const Login: React.FC<HomeScreenProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string>();
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const [password, setPassword] = useState<string>();
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
    const [errorMessage, setErroMessage] = useState<string>('');
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#131821'
            },

        })
    }, []);

    const handleForgotPassword = () => {
        if (email) {
            sendPasswordResetEmail(auth, email).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const handleLogin = async () => {
        if (email && password) {
            try {
                let response = await signInWithEmailAndPassword(auth, email, password);
                setErroMessage('');
                console.log(response);
                console.log('Verified!');
            } catch (err) {
                setErroMessage('Invalid Credentials!');
                console.log(err);
            }

        }
    }

    const handleRegister = () => {
        navigation.navigate('SignUp');
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#131821',
                height: screenHeight, width: '100%'
            }}>
                <View style={{ width: '100%', height: ((screenHeight * 20) / 100), flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../HomeComponent/logo.jpg')} style={{ height: '55%', width: '50%', resizeMode: 'contain' }} />
                </View>
                {showForgotPassword ?
                    <View style={{
                         width: '100%', height: ((screenHeight * 75) / 100), backgroundColor: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                        borderRadius: 20
                    }}>
                        <Text style={{marginTop:'10%' , fontSize:25, marginBottom:'10%'}}>Plase Confirm Your Email!</Text>
                        <Input placeholder="Enter Email.." textContentType={"name"} inputStyle={{ color: 'black'}} onChangeText={(text) => { setEmail(text) }} />
                        <Button title={"Forgot Password!"} color={"error"} style={{ width: (screenWidth * 75) / 100 }} radius={10} onPress={handleForgotPassword} />
                    </View>
                    :
                    <View style={{
                        width: '100%', height: ((screenHeight * 75) / 100), backgroundColor: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                        borderRadius: 20
                    }}>
                        <Text style={{ color: 'black', fontSize: 20, marginTop: '5%', marginBottom: '5%' }}>Please Login with an Email!</Text>
                        <Input placeholder="Email..." textContentType={"name"} inputStyle={{ color: 'black' }} onChangeText={(text) => { setErroMessage(''); setEmail(text) }} />
                        <Input placeholder="Password..." secureTextEntry={showPassword} textContentType="password" inputStyle={{ color: 'black' }} onChangeText={(e) => { setErroMessage(''); setPassword(e) }}
                            rightIcon={<Icon name="eye" size={25} color="black" onPress={() => setShowPassword(!showPassword)} />} />
                        {errorMessage ? <Text style={{ fontSize: 25, color: 'red', marginTop: '1%', marginBottom: '2%' }}> {errorMessage}</Text> : null}
                        <Button title={'Login'} color={'primary'} style={{ width: (screenWidth * 75) / 100 }} radius={10} onPress={handleLogin} />
                        <Text>Or</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '8%' }}>
                            <Text style={{ marginRight: '1%' }}>Already have Account</Text>
                            <Text style={{ textDecorationLine: 'underline', color: 'orange' }} onPress={handleRegister}>Register</Text>
                        </View>
                        <View>
                            <Button title={"Forgot Password ?"} color={"primary"} style={{ width: (screenWidth * 75) / 100, marginTop: '4%' }} radius={10} onPress={() => setShowForgotPassword(!showForgotPassword)} />
                        </View>
                        <Button color={"error"} style={{ width: (screenWidth * 75) / 100, marginTop: '5%' }} radius={10} title={"Google SignIn"} />
                    </View>
                }

            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;