import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import img from '../../../assets/santos.png'

import Mensagem from './mensagem2';

function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2  </Text>

            <Mensagem style={styles.titulo}>Atividade 2  <Image source={img} style={styles.imagem}/></Mensagem>
            <Mensagem style={styles.titulo}>Atividade 2  <Image source={img} style={styles.imagem}/></Mensagem>
            <Mensagem style={styles.titulo}>Atividade 2  <Image source={img} style={styles.imagem}/></Mensagem>


            {/* <Mensagem titulo={'ERRO'}> Você não clicou corretamente! <Image source={img} style={styles.imagem}/></Mensagem>
            <Mensagem titulo={'SUCESSO'}> Acesso permitido!</Mensagem>
            <Mensagem titulo={'AVISO'}> O tempo acabou!</Mensagem> */}
            
        </View>
    )
}

export default Atividade2;