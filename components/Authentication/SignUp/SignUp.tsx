import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Input } from "@rneui/base";
import { View, Text, KeyboardAvoidingView, Platform, Dimensions, Image } from "react-native";
import { AppStackParamList } from "../../../App";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'SignUp'>;
};

const SignUp : React.FC<HomeScreenProps>  = ({navigation}) => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const [username , setUsername] = useState<string>('');
    const [password , setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    useEffect(()=>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'#131821'
            }
        })
    },[]);
    
    const handleLogin = () =>{
        navigation.navigate('Login');
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
                    <Text style={{ color: 'black', fontSize: 20,  marginTop:'5%', marginBottom:'5%' }}>Create Account!</Text>
                    <Input placeholder="Email..." textContentType={"name"} inputStyle={{ color: 'black' }} onChangeText={(text) => setUsername(text)} />
                    <Input placeholder="Password..." secureTextEntry = {showPassword} textContentType="password" inputStyle={{ color: 'black' }} onChangeText={(text) => setPassword(text)} rightIcon = {<Icon name="eye" size={25} color="black" onPress={() => setShowPassword(!showPassword)}/>}/>
                    <Input placeholder="Confirm Password..." secureTextEntry = {showConfirmPassword} textContentType={password.length > 2 ? "name" : "password"} inputStyle={{ color: 'black' }} onChangeText={(text) => setConfirmPassword(text)} 
                    rightIcon={<Icon name="eye" size={25} color="black" onPress={() => setShowConfirmPassword(!showConfirmPassword)} />}/>
                    <Button title={'Create Account'} color={'primary'} style={{ width: (screenWidth * 75) / 100 }} radius={10} />
                    <Text>Or</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '8%' }}>
                        <Text style={{marginRight:'1%'}}>Already have a account</Text>
                        <Text style={{ textDecorationLine: 'underline', color: 'orange' }} onPress={handleLogin}>Login</Text>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default SignUp;