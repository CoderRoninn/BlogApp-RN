import { StyleSheet } from 'react-native';
import { Spacing, Colors } from '../../constants/design/tokens';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
        padding: Spacing.medium,
    },
    row: {
       justifyContent: 'space-between',
    },
});


export default styles;

