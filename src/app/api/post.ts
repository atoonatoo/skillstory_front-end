import axios from 'axios'


export const fetchPost = async (page: number, size: number) => {

    try {
        const response = await axios.get(`http://localhost:8080/api/posts?page=${page}&size=${size}`)
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};