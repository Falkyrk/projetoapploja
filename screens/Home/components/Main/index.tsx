import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ipserver2 } from "../../../config/servidor";
import { styles } from "./Styles";

export default function Main(props:any){

    const [produtos,setProdutos] = useState([{
        idproduto:"",
        nomeproduto:"",
        categoria:"",
        preco:"",
        foto1:""
    }]);

    useEffect(()=>{
        fetch(`${ipserver2}/produto/listar`)
        .then((response)=>response.json())
        .then((rs)=>setProdutos(rs))
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },[])



    return(
        <View style={styles.main}>
            

            {
                produtos.map((itens,ix)=>(
                    <View style={styles.lstprodutos} key={ix}>
                        <Image source={require("../../../../assets/logo4.png")} style={styles.imgproduto}/>
                        <View style={styles.infoproduto}>
                            <Text style={styles.nomeproduto}> {itens.nomeproduto} </Text>
                            <Text style={styles.categoria}> {itens.categoria} </Text>
                            <Text style={styles.preco}> {itens.preco} </Text>

                            <TouchableOpacity onPress={()=>props.tela.navigate("Details",{id:itens.idproduto})} style={styles.btndetalhe}>
                                <Text style={styles.txtbtndetalhe}> Mais detalhes</Text>
                            </TouchableOpacity>
                        </View>  
                    </View>
                ))
            }



        </View>
    )
}