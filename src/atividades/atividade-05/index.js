import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 

import styles from './styles';


function Atividade5 () {
    
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma() {
        const conta = parseInt(n1) + parseInt(n2);
        setTotal(conta.toString());
    }    
    function Sub() {
        const conta = parseInt(n1) - parseInt(n2);
        setTotal(conta.toString());
    }    
        
    function Mult() {
        const conta = parseInt(n1) * parseInt(n2);
        setTotal(conta.toString());
    }

    function Divisao() {
        const conta = parseInt(n1) / parseInt(n2);
        setTotal(conta.toString());        
    }

    function Zerar() {
        setTotal(0)
        setN1(0)
        setN2(0)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={ (entrada) => setN1(entrada) }
                value={n1}
            />

            <Text style={styles.txtSaida}> + </Text>
            
            <Text style={styles.textLabel}> 2º número </Text>
           
            <TextInput
                style={styles.txtEntrada}
                onChangeText={ (entrada) => setN2(entrada) }
                value={n2}
            />
            
            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={styles.txtEntrada}
                editable={false}
                value={total}
            />

            <View style={styles.grupo}>

            <TouchableOpacity style={styles.button1} onPress={() => Soma()}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={() => Sub()}>
                <Text style={styles.textButton}> - </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={() => Mult()}>
                <Text style={styles.textButton}> * </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={() => Divisao()}>
                <Text style={styles.textButton}> / </Text>
            </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.button} onPress={() => Zerar()}>
                <Text style={styles.textButton}> Zerar </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Atividade5;