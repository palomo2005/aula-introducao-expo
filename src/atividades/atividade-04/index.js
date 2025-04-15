import { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; 

import styles from './styles';

function Atividade4 () {

    const [txtInserido, setTxtInserido] = useState('');
    const [txtExibir, setTxtExibir] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.texto}>{}</Text>
            <Text style={styles.texto1}>Nome</Text>
            
            <TextInput 
                style={styles.input}
                onChangeText={(valor) => setTxtInserido(valor)} 
            />

            <Text style={styles.texto}>{}</Text>
            <Text style={styles.texto1}>Sobrenome</Text>
            
            <TextInput 
                style={styles.input}
                onChangeText={(valor1) => setTxtInserido(valor1)} 
            />

            <Text style={styles.titulo}>
                Exemplo envio dados click do botão
            </Text>
            <Text style={styles.texto}>{txtExibir}</Text>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => setTxtExibir(txtInserido)}
            >                
                    <Text style={styles.txtBotao}>
                        Exibir texto digitado
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Atividade4;