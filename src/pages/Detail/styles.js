import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 24
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    body: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8        
    },
    bodyGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerCaso: {
        width: '60%'
    }, 
    containerOng: {
        width: '30%'
    },  
    textTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414d'
    },
    textDescription: {
        marginTop: 8,
        width: '100%',
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
        lineHeight: 28,
        flexWrap: 'wrap'
    },
    titleDescription: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414d'
    },
    footer: {
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8  
    },
    containerBotao: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '48%',
        backgroundColor: '#e02041',
        borderRadius: 8
    },
    textBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    textFooter: {
        fontWeight: 'bold',
        fontSize: 19
    },
    textFooterSimple: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 15,
        color: '#737380',
    },
    containerScroll: {
        marginTop: 32
    },
    locAndValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    valor: {
        width: '60%'
    },
    loc: {
        width: '30%'
    }
})