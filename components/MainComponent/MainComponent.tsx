import { StackNavigationProp } from "@react-navigation/stack";
import { View , Text, Dimensions, KeyboardAvoidingView, Platform, Image} from "react-native";
import { AppStackParamList } from "../../App";
import { useEffect } from "react";
import { Button, Input } from "@rneui/base";
type MainScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'Main'>;
}
export const MainComponent: React.FC<MainScreenProps> = ({navigation}) =>{
    useEffect(()=>{
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#131821'
            },

        });
    } ,[]);
    const screenHeight = Dimensions.get('window').height;
    const screenWidth =  Dimensions.get('window').width;
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#131821',
                height: screenHeight, width: '100%'
            }}>
                <View style={{ width: '100%', height: ((screenHeight * 20) / 100), flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../HomeComponent/logo.jpg')} style={{ height: '55%', width: '50%', resizeMode: 'contain' }} />
                </View>
                <View style={{
                        width: '100%', height: ((screenHeight * 75) / 100), backgroundColor: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                        borderRadius: 20
                    }}>
                    
                    </View>

            </View>
        </KeyboardAvoidingView>
    );
}