import { UserData, WallPost } from '../types';

const USER_DATA_KEY = 'ebook_interactive_user_data';
const WALL_POSTS_KEY = 'ebook_interactive_wall_posts';

interface StoredData {
    userName: string;
    completedSteps: number[];
    userData: UserData;
    earnedBadges: string[];
}

export const saveUserData = (data: StoredData): void => {
    try {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("Failed to save user data to localStorage", error);
    }
};

export const loadUserData = (): StoredData | null => {
    try {
        const data = localStorage.getItem(USER_DATA_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Failed to load user data from localStorage", error);
        return null;
    }
};

export const loadWallPosts = (): WallPost[] => {
    try {
        const posts = localStorage.getItem(WALL_POSTS_KEY);
        return posts ? JSON.parse(posts) : [];
    } catch (error) {
        console.error("Failed to load wall posts from localStorage", error);
        return [];
    }
};

export const addWallPost = (post: WallPost): WallPost[] => {
    const posts = loadWallPosts();
    const updatedPosts = [post, ...posts].slice(0, 20); // Keep latest 20 posts
    try {
        localStorage.setItem(WALL_POSTS_KEY, JSON.stringify(updatedPosts));
    } catch (error) {
        console.error("Failed to save wall post to localStorage", error);
    }
    return updatedPosts;
};
