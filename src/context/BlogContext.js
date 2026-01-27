/**
 * Blog state management
 * Used in: App.js (Provider), screens (Context)
 */
import createDataContext from './createDataContext';
import { blogService } from '../api/blogService';


// Handles state changes based on action type
const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            // Add new post with random id
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                title: action.payload.title,
                content: action.payload.content,
            }];

        case 'delete_blogpost':
            // Remove post by id
            return state.filter((blogPost) => blogPost.id !== action.payload);

        case 'edit_blogpost':
            // Update post by id
            return state.map((blogPost) => {
                // If id matches, replace with new data; otherwise keep original
                return blogPost.id === action.payload.id 
                    ? action.payload 
                    : blogPost;
            });

        case 'get_blogposts':
            return action.payload;
            
        default:
            return state;
    }
};

// Action: fetches all blog posts from API
const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await blogService.getAll();
        dispatch({ type: 'get_blogposts', payload: response.data });
    };
};

// Action: adds a new blog post
const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await blogService.create({ title, content });
        // dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (callback) {
            callback();
        }
    };
};

// Action: deletes a blog post by id
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await blogService.delete(id);
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};

// Action: edits a blog post
const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await blogService.update(id, { title, content });
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    };
};

// Export Context and Provider for use in app
export const { Context, Provider } = createDataContext(
    reducer,
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
    [] // initial state: empty array
);
