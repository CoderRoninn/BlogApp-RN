/**
 * Blog API service
 * Used in: context/BlogContext.js
 */
import jsonServer from './jsonServer';
import { ENDPOINTS } from '../constants/api/endpoints';


class BlogService {
    // Fetches all blog posts from the server
    getAll() {
        return jsonServer.get(ENDPOINTS.BLOGPOSTS);
    }

    // Deletes a blog post by id
    delete(id) {
        return jsonServer.delete(`${ENDPOINTS.BLOGPOSTS}/${id}`);
    }

    // Updates a blog post by id
    update(id, data) {
        return jsonServer.put(`${ENDPOINTS.BLOGPOSTS}/${id}`, data);
    }

    // Creates a new blog post
    create(data) {
        return jsonServer.post(ENDPOINTS.BLOGPOSTS, data);
    }
}


export const blogService = new BlogService();
