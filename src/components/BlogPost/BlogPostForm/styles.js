import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, Border, Button } from '../../../constants/design/tokens';

export default StyleSheet.create({
    input: {
        fontSize: Typography.fontSize.medium,
        borderWidth: Border.width.thin,
        borderColor: Border.color.gray,
        borderRadius: Border.radius.default,
        marginBottom: Spacing.medium,
        padding: Spacing.large,
        marginHorizontal: Spacing.large,
        backgroundColor: Colors.white,
    },
    inputContent: {
        fontSize: Typography.fontSize.medium,
        borderWidth: Border.width.thin,
        borderColor: Border.color.gray,
        borderRadius: Border.radius.default,
        marginBottom: Spacing.medium,
        padding: Spacing.large,
        marginHorizontal: Spacing.large,
        backgroundColor: Colors.white,
        minHeight: 150,
        textAlignVertical: 'top',
    },
    label: {
        fontSize: Typography.fontSize.large,
        fontWeight: Typography.fontWeight.medium,
        marginBottom: Spacing.small,
        marginLeft: Spacing.large,
        marginTop: Spacing.medium,
        color: Colors.textLight,
    },
    button: {
        backgroundColor: Colors.primary,
        width: Button.width.medium,
        paddingVertical: Spacing.medium,
        borderRadius: Border.radius.default,
        alignSelf: 'center',
        alignItems: 'center',
        margin: Spacing.large,
    },
    buttonText: {
        fontWeight: Typography.fontWeight.bold,
        color: Colors.white,
    },
});

