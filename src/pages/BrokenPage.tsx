import React from 'react';
// import s from '../styles/Broken.module.css'
import {useProducts} from "../hooks/products";
import Broken from "../components/Broken";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
// import Product from "../components/Product";


const BrokenPage = () => {
    const {loading, error, broken} = useProducts()
    return (
        < div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {/*{products.map(pr => <Product product={pr} key={pr.id}/>)}*/}
            {broken.map(br => <Broken brokenId={br} key={br.id}/>)}
            {/*<div >*/}
                {/*<Broken brokenId={broken[0]}/>*/}

                {/*{broken.map(br => <Broken brokenId={br} key={br.id}/>)}*/}
                {/*<img src={productImg.image} className={s.box} >*/}
                {/*    <span></span>*/}
                {/*    <span></span>*/}
                {/*    <span></span>*/}
                {/*    <span></span>*/}
                {/*</img>*/}
            {/*</div>*/}
        </div>

    );
};

export default BrokenPage;
