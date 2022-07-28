import React, {useState} from 'react';

const CreateProduct = () => {
    const [value,setValue]=useState('')
    const submitHandler =(e: React.FormEvent)=>{
        e.preventDefault()
    }
    const changeHandler=(e:React.KeyboardEvent<HTMLInputElement>)=>{
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
            <button
                className="border py-2 px-4 bg-emerald-400 hover:text-white"
                type="submit">
                Create
            </button>

        </form>
    );
};

export default CreateProduct;
