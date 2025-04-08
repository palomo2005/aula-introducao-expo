import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo3() {

    const [num, setNum] = useState(0);

    function handleIncrementarState () {
        setNum(num + 1);
    }

    function handleDecrementarState () {
        setNum(num - 1);
    }

    function handleZerarState () {
        setNum(0);
    }

    

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            

            <View style={styles.grupo}>

            <TouchableOpacity style={styles.botao} onPress={handleIncrementarState}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

            <Text style={styles.numero}>{num}</Text> 

            <TouchableOpacity style={styles.botao} onPress={handleDecrementarState}>
                <Text style={styles.txtBotao1}>-</Text>
            </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.botao1} onPress={handleZerarState}>
                <Text style={styles.txtBotao2}>Zerar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Exemplo3;

