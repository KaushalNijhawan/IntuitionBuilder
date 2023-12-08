import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { AppStackParamList } from "../../../App";
import { Button } from "@rneui/themed";
import { Card, Input } from "@rneui/base";

type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'Login'>;
};
const Login: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#131821',
                height: '100%', width: '100%'
            }}>
                <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight:'50%' , marginBottom:'10%',
            borderTopWidth:2}}>
                    <Text style={{ color: 'white' , fontSize:30, fontWeight:'bold'}}>Let's Login!</Text>
                    <Input placeholder="Email..." textContentType={"name"} inputStyle={{ color: 'white' }} />
                    <Input placeholder="Password..." textContentType="password" inputStyle={{ color: 'white' }} />
                    <Button type="outline" title={'Login'} color={'warning'} style={{width:150}}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;