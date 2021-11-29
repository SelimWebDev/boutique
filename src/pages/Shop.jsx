import { useState } from 'react';
import ShoppingList from '../components/ShoppingList.jsx'
import Cart from '../components/Cart'


function Shop(){
    const [totalQuant, updateTotalQuant] = useState(0);
    const [selectedArticles, updateSelectedArticles] = useState([])

    const [cart, updateCart] = useState({
        items: [],
        totalQuant: 0
    })

    return (
        <div className="Shop-page">
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
    )
}

export default Shop;