import { Link } from "react-router-dom";

function MyCart({cart, updateCart}){

    function handleClick(){
        updateCart({
            items: [],
            totalQuant: 0
        })
    }

    return (
        <div className="MyCart">
            <ul className="cart-list">
                {cart.items.map(article => 
                        <li key={article.id}>
                            <span className="name">nom : {article.item.name}</span>
                            <span className="price">prix: {article.item.price}</span>
                            <span className="quantity">quantité : {article.quantity}</span>
                        </li>
                )}
            </ul>
            
            <button onClick={ () => handleClick() } >Vider le Panier</button>
            <Link to="../shopping">Retour à la boutique</Link>
            
        </div>
    )
}

export default MyCart;