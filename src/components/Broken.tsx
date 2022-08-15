import React from 'react';
import s from "../styles/Broken.module.css";
import {IProduct} from "../models";

interface BrokenProductProps {
    brokenId: IProduct
}

const Broken = ({brokenId}: BrokenProductProps) => {
    const bgImage='blue'
    return (
        <div className={s.container}>
            <div className={s.box}
                 style={{backgroundImage:`url(${brokenId.image})`}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>

    );
};

export default Broken;
