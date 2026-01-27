import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../../constants/design/tokens';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
        padding: Spacing.extraExtraLarge,
    },
    title: {
        fontSize: Typography.fontSize.extraExtraLarge,
        fontWeight: Typography.fontWeight.bold,
        color: Colors.textLight,
        textAlign: 'center',
        marginBottom: Spacing.extraLarge,
    },
    divider: {
        height: 2,
        backgroundColor: Colors.accentTealLight,
        marginBottom: Spacing.extraLarge,
        borderRadius: 1,
    },
    content: {
        fontSize: Typography.fontSize.medium,
        color: Colors.textLight,
        lineHeight: 26,
    },
});

