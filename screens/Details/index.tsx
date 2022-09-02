import { ScrollView, Text, View } from "react-native";
import Header from "./components/Header";

import Main from "./components/Main";

export default function Details({route}){

    const { id } = route.params;
    return(
        <View style={{flex:1}}>
            <Header />
            <ScrollView horizontal={false}>
            
            <Main id={id}/>
            </ScrollView>
        </View>
    )
}