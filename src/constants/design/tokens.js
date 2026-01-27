/**
 * Design Tokens
 * Standard design system tokens 
 */

export { Colors } from './theme';


export const Typography = {
    fontSize: {
        medium: 16,
        large: 18,
        extraExtraLarge: 24,
    },
    fontWeight: {
        medium: '500',
        bold: 'bold',
    },
};

export const Spacing = {
    extraSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 20,
    extraExtraLarge: 24,
    headerIconTop: -10,
};

export const Border = {
    width: {
        thin: 1,
    },
    radius: {
        default: 20, 
    },
    color: {
        gray: '#999999',
    },
};

export const Shadow = {
    soft: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        elevation: 4, // Android
    },
};

export const Button = {
    width: {
        medium: 120,
    },
};

export const Icon = {
    size: {
        small: 25,
        large: 40,
    },
    color: {
        primary: '#000000',
    },
};
