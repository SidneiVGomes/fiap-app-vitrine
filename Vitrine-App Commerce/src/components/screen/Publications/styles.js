import {StyleSheet} from 'react-native';

import {publicacaoBox, visivelBox, fotoBox, descBox} from '../../../assets/helper/Colors';

export default StyleSheet.create({
    publicacaoView: {
        height:"100%"
    },
    publicationsBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: publicacaoBox,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    visivelBox: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: visivelBox,
        height: 60,
        borderColor: '#000000',
        borderBottomWidth: 0.3,
    },
    fotoBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: fotoBox,
        height: 130,
        marginBottom: 10,
    },
    visivelFromBox: {
        flexDirection: 'row',
        marginBottom: -25,
    },
    visiveUntillBox: {
        flexDirection: 'row',
    },
    text: {
        zIndex: 5,
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemFoto: {
        width: 105,
        height: 105,
    },
    descBox: {
        backgroundColor: descBox,
        borderTopRightRadius: 25,
        height: 60,
        width: '100%',
    },
    textDesc: {
        textAlign:"center",
        marginTop: 5,
        // marginLeft: 20
    }
});