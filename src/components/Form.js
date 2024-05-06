import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login, register, resetPasswordRequest, resetPassword } from '../services/authService';
import Input from './Input';
import '../css/form.css';


const Form = ({ title, type, btnLabel, setFormType, setAlert, setToken }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(prev => ({ ...prev, show: false }));

    try {
      let response;

      switch (type) {
        case 'login':
          response = await login(formData.email, formData.password);
          localStorage.setItem('token', response.token);
          setToken(response.token);
          setFormType('none');
          break;
        case 'register':
          if (formData.password !== formData.passwordConfirmation) {
            throw new Error(t('error.password-match'));
          }
          response = await register(formData.email, formData.password);
          localStorage.setItem('token', response.token);
          setToken(response.token);
          setFormType('none');
          break;
        case 'newPassword':
          if (formData.password !== formData.passwordConfirmation) {
            throw new Error(t('error.password-match'));
          }
          const token = new URLSearchParams(window.location.search).get('token');
          response = await resetPassword(token, formData.password);
          navigate('/vote', { replace: true }); 
          setFormType('login');
          setAlert({ show: true, message: response.success, type: 'success', key: alert.key + 1 });
          break;
        case 'forgetPassword':
          response = await resetPasswordRequest(formData.email);
          setAlert({ show: true, message: response.warning, type: 'warning', key: alert.key + 1 });
          break;
        default:
          break;
      }    
    } catch (error) {
      let alertMessage = t('error.unexpected');
      if (error.response && error.response.data) {
        if (error.response.status === 401 && error.response.data.message === "Invalid credentials.") {
          alertMessage = t('error.bad-password');
        } else {
          alertMessage = error.response.data.error || error.response.data.message || alertMessage;
        }
      } else {
        alertMessage = error.message || alertMessage;
      }
      setAlert({
        show: true,
        message: alertMessage,
        type: 'error',
        key: alert.key + 1
      });
    }
  };

  return (
    <>
      <h1 className="main-title mb-medium">{title}</h1>
      <form onSubmit={handleSubmit} className="form-group">
        {['register', 'login', 'forgetPassword'].includes(type) && (
          <Input
            label={t('vote.label-email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        )}

        {['register', 'login', 'newPassword'].includes(type) && (
          <Input
            label={t('vote.label-password')}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        )}

        {['register', 'newPassword'].includes(type) && (
          <Input
            label={t('vote.label-confirm-password')}
            type="password"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
        )}
        <button type="submit" className="btn btn-secondary">{btnLabel}</button>
      </form>
    </>
  );
};

export default Form;