import React from 'react';
import s from '../styles/Broken.module.css'
import {useProducts} from "../hooks/products";

import {IProduct} from "../models";

interface BrokenProductProps {
    productImg: IProduct

}

const BrokenPage = ({productImg}: BrokenProductProps) => {
    const {loading, error, products, addProduct} = useProducts()
    return (
        <div className={s.container}>
            <img src={productImg.image} className={s.box} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </img>
        </div>
    );
};

export default BrokenPage;
