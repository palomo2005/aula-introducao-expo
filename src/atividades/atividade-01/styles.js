import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 12,
        flex: 1,
        alignItems: 'center',
        borderRadius: 20,
    
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',

    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#000000',

    },
    container1: {
        backgroundColor: '#bebaba',
        padding: 10,
        margin: 20,
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 20,

    },
    texto1: {
        fontSize: RFPercentage(2.5),
        color: '#181818',
    }
});

export default styles;