import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { drawFinish, getDraw } from '../services/dayService';
import Timer from "../components/Timer";
import Btn from "../components/Btn";
import Alert from "../components/Alert";
import SocialNetworksBtns from "../components/SocialNetworksBtns";
import LoadingSpinner from "../components/LoadingSpinner";
import '../css/draw.css';

const Draw = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '', key: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDraw();
        setImageUrl("https://backend.mydayiart.com" + data.image_url);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        setAlert({ show: true, message: error.response.data.error, type: 'error', key: 1 });
      }
    };
    fetchData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFinishClick = async () => {
    try {
      await drawFinish();
      navigate('/vote');
    } catch (error) {
      navigate('/vote');
    }
  };

  return (
    <>
      {alert.show && <Alert key={alert.key} message={alert.message} className={alert.type} />}
      <div className="page-container d-flex">
        <div className="container-left container-flex-adds" style={{ width: windowWidth >= 768 ? '33%' : '100%' }}>
          <Timer />
          <Btn name={t('draw.finish-button')} className="btn-primary mt-medium mb-medium" onclick={handleFinishClick} />
          {windowWidth <= 768 && (
            <div className="container-img">
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <img src="/default-img.webp" alt={t('draw.alt-default')} />
              ) : (
                <img src={imageUrl} alt={t('draw.alt-draw')} />
              )}
            </div>
          )}
          
          <SocialNetworksBtns />
        </div>
        {windowWidth >= 768 && (
          <div className="container-right">
            <div className="container-img">
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <img src="/default-img.webp" alt={t('draw.alt-default')} />
              ) : (
                <img src={imageUrl} alt={t('draw.alt-draw')} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Draw;