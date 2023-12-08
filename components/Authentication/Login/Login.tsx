import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TextInput } from "react-native";
import { AppStackParamList } from "../../../App";
import { Button } from "@rneui/themed";
import { Input } from "@rneui/base";

type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'Login'>;
};
const Login: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={{
            flexDirection: 'column',justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#131821',
            height: '100%', width: '100%'
        }}>
            <View style={{backgroundColor:'white', width:'100%'}}>
                <Text style={{ color: 'white' }}>Let's Login!</Text>
                <Input placeholder="Email..." textContentType={"name"} />
                <Input placeholder="Password" textContentType="password"/>
                <Button type="outline" title={'Login'} />
            </View>
        </View>
    );
}

export default Login;