import { StackNavigationProp } from "@react-navigation/stack";
import { View, Image, Dimensions, KeyboardAvoidingView, Platform } from "react-native";
import { AppStackParamList } from "../../App";
import { useEffect } from "react";
type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'AvatarSelection'>;
};
export const AvatarSelection: React.FC<HomeScreenProps> = ({navigation}) => {

    useEffect(()=>{
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#131821'
            }
        })
    },[]);
    const avatarNames: string[] = ["ENFJ female", "ENFJ male", "ENFP female", "ENFP male", "Entj female", "Entj male", "Entp female",
        "Entp male", "Esfj female", "Esfj male", "ESFP female", "ESFP male", "Estj female", "Estj male", "Estp female", "Estp male",
        "Infj female", "Infj male", "Infp female", "Infp male", "intj female", "Intj male", "Intp female", "INTP male", "Isfj female",
        "Isfj male", "Isfp female", "Isfp male", "Istj female", "Istj male", "Istp female", "Istp male"];
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{flexDirection:'row' , flexWrap:'nowrap', backgroundColor:'#131821', height: screenHeight, width: '100%', justifyContent:'center'}}>
            {avatarNames.map((avtarname, index)=>{
                return (

                    <Image key = {index} source={require('../../assets/logo.jpg')} style={{ height: '30%', width: '25%', resizeMode: 'contain' }} />
                )
            })}
            </View>
        </KeyboardAvoidingView>
    );
};