import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Input } from "@rneui/base";
import { View , Text} from "react-native";
import { AppStackParamList } from "../../../App";

type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'SignUp'>;
};

const SignUp = () =>{
    return (
        <View style={{
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#131821',
            height: '100%', width: '100%'
        }}>
            <View style={{backgroundColor:'white', width:'100%'}}>
                <Text style={{ color: 'white' }}>Let's Login!</Text>
                <Input placeholder="Email..." textContentType={"name"} />
                <Input placeholder="Password" textContentType="password"/>
                <Button type="outline" title={'Register'} />
            </View>
        </View>
    );
}

export default SignUp;