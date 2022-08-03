import React from 'react';
import s from '../styles/RangeSlider.module.css'

const RangeSlider = () => {
    return (
        <div className={s.box}>
            <input type="range" className={s.range} value={'0'} min={'0'} max={'100'}/>

        </div>
    );
};

export default RangeSlider;
