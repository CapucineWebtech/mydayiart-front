import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NoPage = () => {
  const { t } = useTranslation();
  return (
    <div className="page-container">
      <h1 className="main-title">{t('404.title')}</h1>
      <p className="text-justify mt-little" dangerouslySetInnerHTML={{ __html: t('404.description') }}/>
      <NavLink to="/" className="btn btn-primary mt-medium">{t('404.button')}</NavLink>
    </div>
  );
};

export default NoPage;
