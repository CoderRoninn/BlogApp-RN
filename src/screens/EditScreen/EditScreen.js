import React, { useContext } from 'react';
import { View } from 'react-native';
import { Context } from '../../context/BlogContext';
import BlogPostForm from '../../components/BlogPost/BlogPostForm/BlogPostForm';
import styles from './styles';


const EditScreen = ({ route, navigation }) => {

    // Get id from route params
    const id = route.params.id;
    // Get state and editBlogPost function from context
    const { state, editBlogPost } = useContext(Context);
    // Find the blog post with the given id
    const blogPost = state.find((blogPost) => blogPost.id === id);
    
    return (
        <View style={styles.container}>
            {/* BlogPostForm component */}
            <BlogPostForm
                initialValues={{ title: blogPost.title, content: blogPost.content }} // Initial values for the form
                onSubmit={(title, content) => {
                    editBlogPost(id, title, content, () => navigation.pop()); // Edit blog post and navigate back to index screen
                }}
            />
        </View>
    );
};


export default EditScreen;

