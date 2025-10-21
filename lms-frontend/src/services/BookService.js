import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/books";
// Uncomment the above line for local development
// const REST_API_URL = "http://192.168.0.106:8080/api/books";

export const getAllBooks = () => {
    return axios.get(`${REST_API_URL}`);
}

export const addBook = (book) => {
    return axios.post(`${REST_API_URL}/add-book`, book);
}

export const getBookById = (id) => {
    return axios.get(`${REST_API_URL}/${id}`);
}

export const updateBook = (id, book) => {
    return axios.put(`${REST_API_URL}/${id}`, book);
}

export const deleteBook = (id) => {
    return axios.delete(`${REST_API_URL}/${id}`);
}

export const searchBooks = (query, filter) => {
  return axios.get(`${REST_API_URL}/search`, {
    params: { query, filter }
  });
};
