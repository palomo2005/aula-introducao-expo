import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'deepskyblue', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 
    botaoAlert: {
        width: '100%',
        margin: RFPercentage(1)
    },
    botao: {
        backgroundColor: 'deepskyblue',
        width: RFPercentage(30),
        height: RFPercentage(5),
        borderRadius: 20
    },
    texto1: {
        fontSize: RFPercentage(2),
        color: '121212',
        fontWeight: 'bold',
        alignItems: 'center'
    }
});

export default styles;

