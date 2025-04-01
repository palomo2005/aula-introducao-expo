import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Card from './card';

import img1 from '../../../assets/santos.png'
import img2 from '../../../assets/corinthians.png'
import img3 from '../../../assets/Palmeiras.png'
import img4 from '../../../assets/Trikas.png'


function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card titulo={'Camisa Santos I'} img={img1} valor={'350,00'}>Camisa Oficial N° 1 | Modelo 2025.</Card>
            <Card titulo={'Camisa Corinthians'} img={img2} valor={'380,00'}>Camisa principal retrô | Modelo 1997.</Card>
            <Card titulo={'Camisa Palmeiras'} img={img3} valor={'280,00'}>Camisa secundária | Modelo 2024.</Card>
            <Card titulo={'Camisa São Jorge'} img={img4} valor={'550,00'}>Camisa modelo 2012.</Card>
        </View>
    );
}

export default Atividade2;