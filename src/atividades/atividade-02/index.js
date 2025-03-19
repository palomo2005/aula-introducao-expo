import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import img from '../../../assets/santos.png'

import Mensagem from './mensagem-02';

function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>

            <Mensagem> <Image source={img} style={styles.imagem}/> titulo={'ERRO'} Você não clicou corretamente! </Mensagem>
            <Mensagem titulo={'SUCESSO'}> Acesso permitido!</Mensagem>
            <Mensagem titulo={'AVISO'}> O tempo acabou!</Mensagem>
            
        </View>
    )
}

export default Atividade2;