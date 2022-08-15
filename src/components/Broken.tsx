import React from 'react';
import s from "../styles/Broken.module.css";
import {IProduct} from "../models";

interface BrokenProductProps {
    brokenId: IProduct
}

const Broken = ({brokenId}: BrokenProductProps) => {
    return (
        <div className={s.container}>
            <div className={s.box}>
                <span style={{position:'absolute', inset: '0', backgroundImage:`url(${brokenId.image})`, transition: '0.5s', backgroundSize: 'cover'}}></span>
                <span style={{position:'absolute', inset: '0', backgroundImage:`url(${brokenId.image})`, transition: '0.5s', backgroundSize: 'cover'}}></span>
                <span style={{position:'absolute', inset: '0', backgroundImage:`url(${brokenId.image})`, transition: '0.5s', backgroundSize: 'cover'}}></span>
                <span style={{position:'absolute', inset: '0', backgroundImage:`url(${brokenId.image})`, transition: '0.5s', backgroundSize: 'cover'}}></span>
            </div>

        </div>

    );
};

export default Broken;
