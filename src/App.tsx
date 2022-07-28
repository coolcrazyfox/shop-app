import React from 'react';
import Loader from './components/Loader';
import Product from "./components/Product";
import {useProducts} from "./hooks/products";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";


function App() {
    // const [count, setCount] = useState(0)
    const {loading, error, products} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(pr => <Product product={pr} key={pr.id}/>)}
            {/*<Product product={products[0]}/>*/}
            {/*<h1>`hello {count}`</h1>*/}
            {/*<button onClick={() => setCount(count + 1)}>click</button>*/}
            <Modal>
                <CreateProduct/>
            </Modal>

        </div>
    );
}

export default App;
