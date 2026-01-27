import React, { useContext, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Context } from '../../context/BlogContext';
import ROUTES from '../../constants/navigation/routes';
import BlogPostCard from '../../components/BlogPost/BlogPostCard/BlogPostCard';
import styles from './styles';


const IndexScreen = ({ navigation }) => {

    // Get state and functions from context
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    // Fetch blog posts when screen comes into focus 
    useFocusEffect(
        useCallback(() => {
            getBlogPosts();
        }, [])
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                numColumns={2} // 2 column grid layout
                columnWrapperStyle={styles.row} // Space between cards in each row
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <BlogPostCard
                            item={item}
                            onPress={() => navigation.navigate(ROUTES.Show, { id: item.id })}
                            onDelete={() => deleteBlogPost(item.id)}
                        />
                    );
                }}
            />
        </View>
    );
}


export default IndexScreen;

