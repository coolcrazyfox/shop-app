import React, {useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const initProductData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 3
    }
}

const CreateProduct = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Please enter some value')
        }

        initProductData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', initProductData)
    }
    const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error}/>}
            <button
                className="border py-2 px-4 bg-emerald-400 hover:text-white"
                type="submit">
                Create
            </button>

        </form>
    );
};

export default CreateProduct;
