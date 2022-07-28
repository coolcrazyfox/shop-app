import React from 'react';

const CreateProduct = () => {
    return (
        <form>
            <input type="text" className="border py-2 px-4 mb-2 w-full" placeholder="Enter product title..."/>
            <button className="border py-2 px-4 bg-emerald-400 hover:text-white" type="submit">Create</button>

        </form>
    );
};

export default CreateProduct;
