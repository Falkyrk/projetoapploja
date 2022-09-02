import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    login:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    caixa:{
        borderWidth: 1,
        borderColor:"#d3d3d3",
        width:300,
        marginBottom:10,
        padding:10
    },
     btnlogin:{
         flexDirection:"row",
         width:120,
         justifyContent:"center",
         alignItems:"center",
         backgroundColor:"lime",
         marginBottom:20
     },
     btncadastrar:{
        flexDirection:"row",
        width:120,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightred",
        marginBottom:20
    }
})