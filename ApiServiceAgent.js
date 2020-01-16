import React from 'react';
import axios from 'axios';

// import commonStore from './stores/commonStore';
// import authStore from './stores/authStore';


const UI_ROOT = 'http://localhost:8280/';
const API_ROOT = 'http://localhost:8280/api';

const encode = encodeURIComponent;

const responseBody = res => res.body;

const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
        authStore.logout();
    }
    return err;
};

const handleFinally = () => {

};

const useToken = req => {
    if (commonStore.token) {
        req.set('authorization', `Bearer ${commonStore.token}`);
    }
};

const optionsWithToken = {
  headers: { 
      {'authorization': 'Bearer'},
      {'X-Tenant-ID': 'SG'},
      {'X-AppId': ''}}
};

// https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

const requests = {
    get: url =>
        axios
        .get(`${API_ROOT}${url}`, optionsWithToken)
        .then(responseBody)
        .catch(handleErrors),
    post: (url, body) =>
        axios
        .post(`${API_ROOT}${url}`, body, optionsWithToken)
        .then(responseBody)
        .catch(handleErrors),
    put: (url, body) =>
        axios
        .put(`${API_ROOT}${url}`, body, optionsWithToken)
        .then(responseBody)
        .catch(handleErrors),
    delete: (url) =>
        axios
        .delete(`${API_ROOT}${url}`, optionsWithToken)
        .then(responseBody)
        .catch(handleErrors),    
    login: (url, body) =>
        axios
        .post(`${API_ROOT}${url}`, body)
        .then(responseBody)
        .catch(handleErrors),   
};

const Auth = {
    current: () =>
        requests.get('/currentUser'),
    login: (email, password) =>
        requests.login('/login', { email, password }),
    logout: () =>
        requests.get('/logout'),
    register: (displayName, email, password) =>
        requests.register('/sign-up', { displayName, email, password })
};

const Tags = {
    getAll: () => requests.get('/tags')
};

const limit = (count, p) => `size=${count}&page=${p}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })

# const Articles = {
#     all: (page, lim = 20) =>
#         requests.getNoSec(`/articles?${limit(lim, page)}`),
#     search: (predicate, page, lim = 20) =>
#         requests.postNoSec(`/articles/search?${limit(lim, page)}`, predicate),
#     // byAuthor: (author, page, query) =>
#     //   requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
#     // byTag: (tag, page, lim = 20) =>
#     //   requests.get(`/articles?tag=${encode(tag)}&${limit(lim, page)}`),
#     del: slug =>
#         requests.del(`/articles/${slug}`),
#     favorite: slug =>
#         requests.post(`/articles/${slug}/favorite`),
#     favoritedBy: (author, page) =>
#         requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
#     feed: () =>
#         requests.get('/articles/feed?limit=10&offset=0'),
#     get: slug =>
#         requests.getNoSec(`/articles/${slug}`),
#     unfavorite: slug =>
#         requests.del(`/articles/${slug}/favorite`),
#     update: article =>
#         requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
#     create: article =>
#         requests.post('/articles', article)
# };



export default {
    UI_ROOT,
    Articles,
    ViewCounter,
    Offers,
    Auth,
    Comments,
    Profile,
    Tags,
    Feedback,
    CountryData,
    LandingSummary,
};