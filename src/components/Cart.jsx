import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function Cart({totalQuant, updateTotalQuant, updateSelectedArticles, selectedArticles}) {

    function handleClick(){
        updateSelectedArticles({})
        updateTotalQuant(0)
    }

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                <i className="fas fa-bicycle"></i>
                {totalQuant}
            </div>
            <button onClick={ () => handleClick() } >Vider le Panier</button>
            <Link to="/mycart">Mon pannier</Link>
        </div>
    )
}

export default Cart;