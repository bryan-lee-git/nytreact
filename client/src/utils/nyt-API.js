import axios from "axios";

const apiKey = "112da6dc944c46e38175cc791005d94e"

export default {
    // Gets all Articles
    getArticles: function (query, limit, start, end) {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${query}&limit=${limit}&begin_date=${start}&end_date=${end}&sort=newest`);
    },
    // Gets the article with the given id
    getArticle: function (id) {
        return axios.get("/api/articles/" + id);
    },
    // Deletes the Article with the given id
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves a Article to the database
    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    }
};