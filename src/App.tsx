import React, {useContext, useState} from 'react';
import Loader from './components/Loader';
import Product from "./components/Product";
import {useProducts} from "./hooks/products";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import {IProduct} from "./models";
import {ModalContext} from "./context/ModalContext";


function App() {
    // const [count, setCount] = useState(0)
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open, close}=useContext(ModalContext)
    // const [modal, setModal] = useState(false)
    const createHandler = (product:IProduct)=>{
        close()
        // setModal(false)
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(pr => <Product product={pr} key={pr.id}/>)}
            {/*<Product product={products[0]}/>*/}
            {/*<h1>`hello {count}`</h1>*/}
            {/*<button onClick={() => setCount(count + 1)}>click</button>*/}
            {modal && <Modal title={'Create new product'} onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            <button
                onClick={open}
                className={"fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"}
            > + </button>

        </div>
    );
}

export default App;
