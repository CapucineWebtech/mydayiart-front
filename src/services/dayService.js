import axios from 'axios';

const API_BASE_URL = 'https://backend.mydayiart.com';

const getLanguage = () => {
  return localStorage.getItem('i18nextLng') || 'en';
};

export const drawFinish = async () => {
    try {
        const url = `${API_BASE_URL}/finished?language=${getLanguage()}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDraw = async () => {
    try {
        const url = `${API_BASE_URL}/today?language=${getLanguage()}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};
