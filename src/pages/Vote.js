import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { checkHasVoted, voteForTheme } from '../services/voteService';
import { deleteUser } from '../services/authService';
import Form from '../components/Form';
import Alert from '../components/Alert';
import SocialNetworksBtns from "../components/SocialNetworksBtns";
import Btn from '../components/Btn';
import '../css/vote.css';

const Vote = () => {
  const [formType, setFormType] = useState('none');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [alert, setAlert] = useState({ show: false, message: '', type: '', key: 0 });
  const [themesToday, setThemesToday] = useState([]);
  const [lastVotedThemeId, setLastVotedThemeId] = useState(null);
  const [userId, setUserId] = useState();
  const [userEmail, setUserEmail] = useState();
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const fetchThemes = useCallback(async () => {
    try {
      const response = await checkHasVoted(token);
      setThemesToday(response.themes_today);
      setLastVotedThemeId(response.last_voted_theme_id);
      setUserId(response.user_id);
      setUserEmail(response.user_email);
    } catch (error) {
      if (error.response.data.message === "Invalid JWT Token" || error.response.data.message === "Expired JWT Token" || error.response.data.message === "Invalid credentials." ) {
        localStorage.removeItem('token');
        setFormType('login');
      }
      setUserId(error.response.data.user_id);
      setUserEmail(error.response.data.user_email);
      setAlert({ show: true, message: error.response.data.error, type: 'error', key: new Date().getTime() });
    }
  }, [token]);

  const handleVote = async (id) => {
    try {
      const response = await voteForTheme(token, id);
      setLastVotedThemeId(id);
      setAlert({ show: true, message: response.success, type: 'success', key: new Date().getTime() });
    } catch (error) {
      setAlert({ show: true, message: error.response.data.error, type: 'error', key: new Date().getTime() });
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await deleteUser(token, userId);
      localStorage.removeItem('token');
      setFormType('login');
      setAlert({ show: true, message: response.success, type: 'success', key: new Date().getTime() });
    } catch (error) {
      setAlert({ show: true, message: error.response.data.error, type: 'error', key: new Date().getTime() });
    }
  };

  const handleFormSwitch = (type) => {
    setFormType(type);
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get('token');
    window.addEventListener('resize', handleResize);
    if (urlToken) {
      setFormType('newPassword');
    } else if (token) {
      fetchThemes();
    } else {
      setFormType('login');
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [token, fetchThemes]);

  return (
    <>
      {alert.show && <Alert key={alert.key} message={alert.message} className={alert.type} />}
      <div className="page-container page-vote-container">
        <div className={windowWidth > 768 && formType !== 'none' ? 'd-flex' : ''}>
          {formType !== 'none' && 
            <div style={{ width: windowWidth > 768 ? '40%' : '100%', margin: '0 auto' }}>
              {formType === 'login' && <Form title={t("vote.title-login")} type="login" btnLabel={t("vote.button-sign-in")} setFormType={setFormType} setAlert={setAlert} setToken={setToken} />}
              {formType === 'register' && <Form title={t("vote.title-sign-up")} type="register" btnLabel={t("vote.button-sign-up")} setFormType={setFormType} setAlert={setAlert} setToken={setToken} />}
              {formType === 'forgetPassword' && <Form title={t("vote.title-forgot-password")} type="forgetPassword" btnLabel={t("vote.button-forgot-password")} setAlert={setAlert} />}
              {formType === 'newPassword' && <Form title={t("vote.title-set-password")} type="newPassword" btnLabel={t("vote.button-set-password")} setFormType={setFormType} setAlert={setAlert} />}

              {formType !== 'none' && formType !== 'newPassword' && 
                <div className="links">
                  {formType !== 'none' && formType !== 'login' && <div onClick={() => handleFormSwitch('login')}>{t("vote.link-sign-in")}</div>}
                  {formType !== 'none' && formType !== 'register' && <div onClick={() => handleFormSwitch('register')}>{t("vote.link-sign-up")}</div>}
                  {formType !== 'none' && formType !== 'forgetPassword' && <div onClick={() => handleFormSwitch('forgetPassword')}>{t("vote.link-forgot-password")}</div>}
                </div>
              }
            </div>
          }

          {formType !== 'none' && formType !== 'newPassword' && 
            <div style={{ width: windowWidth > 768 ? '60%' : '100%', paddingLeft: windowWidth > 768 ? '30px' : '0' }}>
              <p className="text-justify mb-medium" dangerouslySetInnerHTML={{ __html: t('vote.description') }} />
              <SocialNetworksBtns className="mb-little"/>
            </div>
          }

          {formType === 'none' && themesToday.length > 0 && 
            <>
              <h1 className="main-title mt-reset mb-little">{t("vote.title-todays-themes")}</h1>
              <div className={windowWidth > 768 ? 'container-btns' : ''}>
                {themesToday.map(theme => (
                  <Btn key={theme.id} id={theme.id} name={theme.title} className={theme.id === lastVotedThemeId? "btn-disabled-selected mb-little" : "btn-primary mb-little"} onclick={lastVotedThemeId !== null ? null : () => handleVote(theme.id)} disabled={lastVotedThemeId !== null} />
                ))}
              </div>
            </>
          }

          {formType === 'none' && userEmail && 
            <>
              {themesToday.length === 0 &&
                <h1 className="main-title mt-reset mb-medium">{t("vote.sory-no-themes")}</h1>
              }
              <div className="mt-medium mb-little">{t('vote.your-email')}{userEmail}</div>
              <div className={windowWidth > 768 ? 'container-btns' : ''}>
                <Btn name={t("vote.button-logout")} className="btn-warning mb-little" onclick={() => {localStorage.removeItem('token'); setFormType('login');}} />
                <Btn name={t("vote.button-delete-account")} className="btn-danger mb-little" onclick={handleDeleteUser} />
              </div>
            </>
          }
        </div>

        {formType !== 'newPassword' && <div className="adds-container"></div>}
      </div>
    </>
  );
};

export default Vote;