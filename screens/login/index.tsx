import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Styles";
import { useState } from "react";
import { ipserver } from "../config/servidor";

export default function Login({navigation}){

    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");

    return(
        <View style={styles.login}>
            <Text>Login</Text>

            <TextInput placeholder="Usuario" style={styles.caixa}value={usuario}onChangeText={(value)=>setUsuario(value)}/>
            <TextInput placeholder="Senha" style={styles.caixa} secureTextEntry value={senha}onChangeText={(value)=>setSenha(value)}/>
            {/* Botão logar */}
            <TouchableOpacity onPress={()=>{
                //efetuarLogin(usuario,senha);
                navigation.navigate("Home");
                setUsuario("");
                setSenha("");
            }} style={styles.btnlogin}>
                <AntDesign name="login" size={20} color="black"/>
                <Text>Logar</Text>
            </TouchableOpacity>
            {/* Cadastrar */}

            <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")} style={styles.btncadastrar}>
                <AntDesign name="save" size={20} color="black"/>
                <Text>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
}



function efetuarLogin(usuario:any, senha:any){
    if(usuario=="" || senha==""){
        return Alert.alert("Erro","Você deve preencher todos os campos");
    }
    fetch(`${ipserver}/usuarios/login`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:usuario.toLowerCase(),
            senha:senha
        })

    })
    .then((response)=>response.json())
    .then((rs)=>{
        console.log(rs);
        Alert.alert("Acesso","Você está logado")
    })
    .catch((erro)=>console.error(`Erro na api -> ${erro}`));
}