import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct

}

const Product = ({product}: ProductProps) => {
    // const Product = (props:ProductProps) => {
    // props.product.rating.count
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-red-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border hover:text-white', btnBgClassName]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            {/*{props.product.title}*/}
            <img src={product.image} alt={product.title} className="w-1/6 bg"/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}$</span>
            <button className={btnClasses.join(' ')}
                    onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rating: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}

        </div>
    );
};

export default Product;
