import axios from 'axios';

const API_BASE_URL = 'https://backend.mydayiart.com';

const getLanguage = () => {
  return localStorage.getItem('i18nextLng') || 'en';
};

export const login = async (email, password) => {
    if(!password || password === '') {
        password = 'default_password';
    }
    const response = await axios.post(`${API_BASE_URL}/login?language=${getLanguage()}`, { username: email, password });
    return response.data;
};

export const register = async (email, password) => {
    if(!password || password === '') {
        password = 'default_password';
    }
    const response = await axios.post(`${API_BASE_URL}/register?language=${getLanguage()}`, { email, password });
    return response.data;
};

export const resetPasswordRequest = async (email) => {
  const response = await axios.post(`${API_BASE_URL}/password/reset/request?language=${getLanguage()}`, { email });
  return response.data;
};

export const resetPassword = async (token, password) => {
    if(!password || password === '') {
        password = 'default_password';
    }
    const response = await axios.post(`${API_BASE_URL}/password/reset/${token}?language=${getLanguage()}`, { password });
    return response.data;
};

export const deleteUser = async (token, id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/user/delete?language=${getLanguage()}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                id: id
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
