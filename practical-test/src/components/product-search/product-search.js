import React from "react";
import './product-search.css';
export default function ProductSearch({ setFilter }){

        return (
            <div className="search-container">
                <label className="search-label" htmlFor="search-input">Search Products</label>
                <input type="text" id="search-input" onChange={(e) => setFilter(e.target.value)}/>
            </div>
        );
    
};
