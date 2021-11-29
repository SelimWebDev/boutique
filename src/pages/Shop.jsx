import { useState } from 'react';

import ShoppingList from '../components/ShoppingList.jsx'
import Cart from '../components/Cart'
import MyCart from '../components/MyCart'
import { Routes, Route } from 'react-router-dom';

function Shop(){

    const [cart, updateCart] = useState({
        items: [],
        totalQuant: 0
    })

    return (
        <div className="Shop-page">
            <div>PageShop</div>
            <Cart cart={cart} updateCart={updateCart} />
            <Routes>
                <Route path="shopping" element={<ShoppingList cart={cart} updateCart={updateCart}/>} />
                <Route path="mycart" element={<MyCart cart={cart} />} />
            </Routes>
        </div>
    )
}

export default Shop;