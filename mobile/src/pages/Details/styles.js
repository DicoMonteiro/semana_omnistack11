import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        marginTop: 48,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        marginBottom: 24,
    },

    // incidentCases: {
    //     flexDirection: 'row',
    //     // marginBottom: 20,
    //     // marginTop: 8,
    // },

    // incidentValueCases: {
    //     marginTop: 8,
    //     fontSize: 15,
    //     color: '#737380',
    //     marginBottom: 30,
    // },


    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
        color: '#13131a',

    },

    heroDescription: {
        marginTop: 16,
        fontSize: 15,
        color: '#737380',
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // color: '#E02041'
    },

    action: {
        height: 50,
        borderRadius: 8,
        // Background para colocar o formato do button na cor e não Color
        backgroundColor: '#E02041',
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
})