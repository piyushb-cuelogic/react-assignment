export const API_ENDPOINTS = {
    CATEGORIES: "categories.json",
    POSTS: "posts.json",
    USERS: "users.json",
    getPostApi: (id) => "posts/" + id + ".json/",
    getCategoriesApi: (id) => "categories/" + id + ".json/",
    getUsersApi: (id) => "users/" + id + ".json/",
};