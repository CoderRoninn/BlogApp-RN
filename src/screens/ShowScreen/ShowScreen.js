import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Context } from '../../context/BlogContext';
import styles from './styles';


const ShowScreen = ({ route }) => {

    // Get state from context
    const { state } = useContext(Context);
    // Find the blog post with the given id
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id); 

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                {blogPost.title}
            </Text>
            <View style={styles.divider} />
            <Text style={styles.content}>
                {blogPost.content}
            </Text>
        </ScrollView>
    )
};


export default ShowScreen;

