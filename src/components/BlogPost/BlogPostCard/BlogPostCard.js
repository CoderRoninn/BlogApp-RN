import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Icon } from '../../../constants/design/tokens';
import styles from './styles';


const BlogPostCard = ({ item, onPress, onDelete }) => {
    return (
        <Pressable
            style={styles.card}
            onPress={onPress}
        >
            <View style={styles.deleteButtonContainer}>
                <Pressable onPress={onDelete} style={styles.deleteButton}>
                    <Feather name="trash" size={Icon.size.small} color={Icon.color.primary} />
                </Pressable>
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </Pressable>
    );
};


export default BlogPostCard;

