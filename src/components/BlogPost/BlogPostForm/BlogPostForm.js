import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';


const BlogPostForm = ({ onSubmit, initialValues = { title: '', content: '' } }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title} 
              onChangeText={setTitle}
              placeholder="Enter your blog title..."
              placeholderTextColor="#999"
            />
            <Text style={styles.label}>Content</Text>
            <TextInput 
              style={styles.inputContent}
              value={content} 
              onChangeText={setContent}
              placeholder="Write your blog content here..."
              placeholderTextColor="#999"
              multiline={true}
              numberOfLines={6}
            />
            <Pressable style={styles.button} onPress={() => onSubmit(title, content)}>
                <Text style={styles.buttonText}>Save Blog Post</Text>
            </Pressable>
        </View>
    )
};


export default BlogPostForm;

