import { View , Image, Text} from "react-native";
import { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";
type HomeScreenProps = {
    navigation: StackNavigationProp<AppStackParamList, 'Home'>;
  };
const HomePage : React.FC<HomeScreenProps> = ({navigation}) => {
 useEffect(() =>{
        setTimeout(() =>{
          navigation.navigate('Login');
        }, 3000);
      }, []);
    return (
        <SafeAreaView style={{flexDirection:'column', alignItems : 'center', justifyContent:'center', backgroundColor:'#131821', flex:1}}>
            <Image source={require('./logo.jpg')} style={{height:'40%', width:'40%', resizeMode:'contain'}}/>
        </SafeAreaView>
    );
}

export default HomePage;