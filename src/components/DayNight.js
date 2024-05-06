import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Icon from './Icon';
import '../css/daynight.css';

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
