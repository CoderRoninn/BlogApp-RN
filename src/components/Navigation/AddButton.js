import React from 'react';
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Icon, Spacing, Colors } from '../../constants/design/tokens';
import styles from './styles';

const AddButton = ({ onPress }) => {
    return (
        <Pressable 
            onPress={onPress}
            style={{ marginRight: Spacing.medium, marginTop: Spacing.headerIconTop }}
        >
            <View style={styles.addButton}>
                <Feather name="plus" size={Icon.size.small} color={Colors.white} />
            </View>
        </Pressable>
    );
};

export default AddButton;

