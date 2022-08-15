import React from 'react';
import {useProducts} from "../hooks/products";
import Broken from "../components/Broken";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";



const BrokenPage = () => {
    const {loading, error, broken} = useProducts()
    return (
        <div style={{backgroundImage:`url(https://img.freepik.com/premium-photo/black-sponge-texture-background_42422-110.jpg?w=2000)`, backgroundRepeat:'none'}}>
            < div className="container mx-auto max-w-xl pt-1 ">
                {loading && <Loader/>}
                {error && <ErrorMessage error={error}/>}
                {broken.map(br => <Broken brokenId={br} key={br.id}/>)}
            </div>
        </div>

    );
};

export default BrokenPage;
