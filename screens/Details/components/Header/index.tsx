import { AntDesign } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";

export default function Header(){
    return (
        <View style={{height:"30%",justifyContent:"center", alignItems:"center", backgroundColor:"#79BAD8"}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Image source={require("../../../../assets/logo4.png")} style={{width:100,height:100, left:"-25%"}}/>
            <Text style={{color:"white", fontSize:30,marginTop:30,marginRight:10}}>Canes</Text>
            <AntDesign name="shoppingcart" size={30} color="white" style={{marginTop:30, marginLeft:"20%"}}/>
            </View>

            
        </View>
    )

}