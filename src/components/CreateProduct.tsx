import React from 'react';

const CreateProduct = () => {
    return (
        <form>
            <input type="text" className="border py-2 px-4 mb-2" placeholder="Enter product title..."/>
            <button className="border py-2 px-4 bg-emerald-400" type="submit">Create</button>

        </form>
    );
};

export default CreateProduct;
