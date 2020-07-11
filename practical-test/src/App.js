import React, { useState, useEffect } from "react";

import "./App.css";
import ProductSearch from './components/product-search/product-search';
import ProductList from './components/product-list/product-list';
import getProducts from './services/product-provider';

const App = () => {
  const [products, setProducts] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      getProducts()
        .then(products => products.sort((prod1, prod2) => prod1.name.localeCompare(prod2.name)))
        .then((products) =>{
          setProducts(products);
          setIsReady(true);
        });
    }, []);

    if(!isReady){
      return <div className="product-list">Loading...</div>
    }

    return (
      <div className="product-list">
        <ProductSearch setFilter={setSearchFilter}></ProductSearch>

        <ProductList 
            products={products}
            filter={searchFilter}></ProductList>
      </div>
    );
}

export default App;
