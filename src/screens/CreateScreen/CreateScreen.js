import React, { useContext } from 'react';
import { View } from 'react-native';
import { Context } from '../../context/BlogContext';
import BlogPostForm from '../../components/BlogPost/BlogPostForm/BlogPostForm';
import ROUTES from '../../constants/navigation/routes';
import styles from './styles';


const CreateScreen = ({ navigation }) => {

    // Get addBlogPost function from context
    const { addBlogPost } = useContext(Context);

    return (
        <View style={styles.container}>
            {/* BlogPostForm component */}
            <BlogPostForm onSubmit={(title, content) => {
                // Add blog post and navigate to index screen
                addBlogPost(title, content, () => navigation.navigate(ROUTES.Index));
            }} />
        </View>
    );
};


export default CreateScreen;

