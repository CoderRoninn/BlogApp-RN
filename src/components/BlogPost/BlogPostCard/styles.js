import { StyleSheet } from 'react-native';
import { Colors, Spacing, Border, Shadow, Typography } from '../../../constants/design/tokens';

export default StyleSheet.create({
    card: {
        backgroundColor: Colors.accentTealLight,
        borderRadius: Border.radius.default,
        padding: Spacing.large,
        marginHorizontal: Spacing.extraSmall,
        marginVertical: Spacing.small,
        ...Shadow.soft,
        width: '48%',
        minHeight: 150,
    },
    deleteButtonContainer: {
        alignItems: 'flex-end',
    },
    deleteButton: {
        padding: Spacing.extraSmall,
    },
    title: {
        fontSize: Typography.fontSize.large,
        fontWeight: Typography.fontWeight.bold,
        color: Colors.textLight,
        marginTop: Spacing.small,
    },
});

