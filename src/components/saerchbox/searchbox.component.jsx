import React from "react";
import "../saerchbox/searchbox.styles.css";

export const Search = ({ placeholder, handlechange }) => {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={handlechange} />
    )
}

export default Search