import { useState } from 'react';
import ShoppingList from '../components/ShoppingList.jsx'
import Cart from '../components/Cart'


function Shop(){
    const [totalQuant, updateTotalQuant] = useState(0);
    const [selectedArticles, updateSelectedArticles] = useState([])

    return (
        <div className="Shop-page">
            <Cart totalQuant={totalQuant} updateTotalQuant={updateTotalQuant} selectedArticles={selectedArticles} updateSelectedArticles={updateSelectedArticles} />
            <ShoppingList totalQuant={totalQuant} updateTotalQuant={updateTotalQuant} updateSelectedArticles={updateSelectedArticles} selectedArticles={selectedArticles} />
        </div>
    )
}

export default Shop;