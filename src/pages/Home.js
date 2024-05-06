import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Btn from "../components/Btn";
import SocialNetworksBtns from "../components/SocialNetworksBtns";
import '../css/home.css';


const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const language = searchParams.get('language');
    
    if (language === "en" || language === "fr") {
      i18n.changeLanguage(language);
      localStorage.setItem('i18nextLng', language);
      searchParams.delete('language');
    } else if (language) {
      searchParams.delete('language');
    }
    const queryString = searchParams.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.pushState(null, '', newUrl);
  }, [i18n]);
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  const resetUTC = new Date();
  resetUTC.setUTCHours(0, 0, 0, 0);
  const timeFormat = i18n.language === 'fr' ? "HH'h'mm" : 'hh:mm aa';
  const resetTimeLocal = format(resetUTC, timeFormat);

  return (
    <>
      <div className="page-container">
        {i18n.language !== 'fr' && <Btn name="Passer en Français" className="btn-secondary" onclick={() => changeLanguage('fr')} />}
        {i18n.language !== 'en' && <Btn name="Switch to English" className="btn-secondary" onclick={() => changeLanguage('en')} />}
        
        <div className="d-flex">
          <div style={{ width: windowWidth >= 900 ? '50%' : '100%' }}>
            <h1 className="main-title mt-medium mb-medium">{t('home.title')}</h1>
            <NavLink to="/draw" className="btn btn-primary">{t('home.button')}</NavLink>
            <p className="mt-little">{t('home.reset-time')}{resetTimeLocal}</p>
            <p className="text-justify mt-little" dangerouslySetInnerHTML={{ __html: t('home.description') }} />
            <SocialNetworksBtns />
          </div>
          {windowWidth >= 900 && (
            <div className="right-content">
              <div style={{width: '100%', height: '100%', backgroundColor: 'red'}}></div>
            </div>
          )}
        </div>
      </div>
    </>
  )
};

export default Home;