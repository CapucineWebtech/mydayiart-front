import React, { useContext } from 'react';
import Icon from './Icon';
import '../css/daynight.css';
import ThemeContext from '../context/ThemeContext';

const DayNight = () => {
    const { isDay, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`btn-day-night ${isDay ? '' : 'night'}`} onClick={toggleTheme}>
            <div className={`icon-day-night-container ${isDay ? '' : 'night'}`}>
                <Icon name={isDay ? "day" : "night"} color={isDay ? "#fff" : "#000"}/>
            </div>
        </div>
    );
};

export default DayNight;
