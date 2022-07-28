import React from 'react';
import Product from "./components/Product";
import {useProducts} from "./hooks/products";


function App() {
    // const [count, setCount] = useState(0)
    const {loading, error, products}=useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <h2 className="text-center">Loading...</h2>}
            {error && <p className="text-center text-red-600">{error}</p>}
            {products.map(pr => <Product product={pr} key={pr.id}/>)}
            {/*<Product product={products[0]}/>*/}
            {/*<h1>`hello {count}`</h1>*/}
            {/*<button onClick={() => setCount(count + 1)}>click</button>*/}

        </div>
    );
}

export default App;
