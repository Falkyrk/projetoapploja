import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ipserver2 } from "../../../config/servidor";
import { styles } from "./Styles";
import Carousel from 'react-native-snap-carousel';

export default function Main(props:any){
   

    const [produto,setProduto] = useState({
        idproduto:"",
        nomeproduto:"",
        descricao:"",
        categoria:"",
        preco:"",
        foto1:"",
        foto2:"",
        foto3:"",
        foto4:""
    });

    useEffect(()=>{
        fetch(`${ipserver2}/produto/pesquisar/${props.id}`)
        .then((response)=>response.json())
        .then((rs)=>setProduto(rs))
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },[])



    return(
        <View style={styles.main}>
            

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
            <Image source={{uri:`${produto.foto1}`}}
            style={{width:"100%",height:200,resizeMode:"cover"}}/>
            
            <View style={styles.infoproduto}>
                <Text>{produto.nomeproduto}</Text>
                <Text>{produto.categoria}</Text>
                <Text>{produto.descricao}</Text>
                <Text>{produto.preco}</Text>

                <TouchableOpacity onPress={()=>alert("Oi")}
                style={styles.btncarrinho}>
                    <FontAwesome name="shopping-cart" size={24} color="white"/>
                    <Text> Adicionar ao carrinho </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}