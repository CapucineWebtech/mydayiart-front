import axios from 'axios';

const API_BASE_URL = 'https://backend.mydayiart.com/user';

const getLanguage = () => {
  return localStorage.getItem('i18nextLng') || 'en';
};

export const checkHasVoted = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/has_voted?language=${getLanguage()}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const voteForTheme = async (token, id) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/vote?language=${getLanguage()}`, {
        "id": id
        }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
        return response.data;
    }
    catch (error) {
        throw error;
    }
}
