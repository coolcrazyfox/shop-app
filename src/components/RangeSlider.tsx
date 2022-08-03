import React from 'react';
import s from '../styles/RangeSlider.module.css'

const RangeSlider = () => {

    const rangeSlider=(value:string)=>{
        // document.getElementById('rangeValue').innerHTML=value

    }
    return (
        <div className={s.box}>
            <input type="range" className={s.range} value='0' min='0' max='100'
            // onMouseMove={rangeSlider}
            />
            <span id={s.rangeValue}>0</span>

        </div>
    );
};

export default RangeSlider;
