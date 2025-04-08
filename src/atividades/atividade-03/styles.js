import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
        flexDirection: 'column'
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
        margin: RFPercentage(1),
    }, 
    numero: {
        fontSize: RFPercentage(4), 
        color: '#000000',
        margin: RFPercentage(2)
    }, 
    botao: {
        backgroundColor: 'deepskyblue', 
        width: '30%', 
        height: RFPercentage(7), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(2),
        
    }, 
    botao1: {
        backgroundColor: 'deepskyblue', 
        width: '70%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
    },
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
    txtBotao1: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
    txtBotao2: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
    grupo: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default styles;

