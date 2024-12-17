import axios from 'axios';
const temp = 'https://my-nc-news-x75i.onrender.com/api';

const api = axios.create({ baseURL: 'http://127.0.0.1:9090/api', });

const getAllArticles = () => {
    return api.get('/articles')
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            console.log('Error fetching articles')
        });
}

export { getAllArticles };

