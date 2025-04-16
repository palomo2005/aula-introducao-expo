import { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; 

import styles from './styles';

function Atividade4 () {

    const [txtInserido, setTxtInserido] = useState('');
    const [txtInserido1, setTxtInserido1] = useState('');
    const [txtExibir, setTxtExibir] = useState('')


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.texto1}>Nome</Text>
            
            <TextInput 
                style={styles.input}
                value={txtInserido}
                onChangeText={(valor) => setTxtInserido(valor)} 
            />

            <Text style={styles.texto}>{}</Text>
            <Text style={styles.texto1}>Sobrenome</Text>
            
            <TextInput 
                style={styles.input}
                value={txtInserido1}
                onChangeText={(valor) => setTxtInserido1(valor)} 
            />


            <Text style={styles.texto}>{txtExibir}</Text>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => {
                    setTxtExibir(`${txtInserido} ${txtInserido1}`);
                    setTxtInserido('');
                    setTxtInserido1('');
                
            }}>                
                    <Text style={styles.txtBotao}>
                        Exibir texto digitado
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Atividade4;