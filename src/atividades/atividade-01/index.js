import { View, Text } from 'react-native'; 

import styles from './styles';

function Atividade1 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>

            <View style={styles.container1}>
                <Text style={styles.texto1}>O Real Madrid Club de Fútbol, comumente referido como Real Madrid, é um clube de futebol profissional espanhol sediado em Madrid. Compete na La Liga, a principal competição do sistema de ligas da Espanha</Text>
            
            </View>

        
        </View>

    )
}

export default Atividade1;