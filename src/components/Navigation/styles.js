import { StyleSheet } from 'react-native';
import { Colors, Border } from '../../constants/design/tokens';

export default StyleSheet.create({
    addButton: {
        width: 40,
        height: 40,
        borderRadius: Border.radius.default,
        backgroundColor: Colors.accentCoral,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

