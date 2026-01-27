/**
 * HTTP client for external APIs.
 * Base URL: read from EXPO_PUBLIC_BASE_URL (.env)
 * Timeout: 15 seconds (from constants/api/timing.js)
 */
import axios from 'axios';
import { TIMING } from '../constants/api/timing';


export default axios.create({
    // Base URL will change every 8 hours because of using free ngrok
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    timeout: TIMING.REQUEST_TIMEOUT_MS
})