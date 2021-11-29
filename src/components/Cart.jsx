import { Link } from "react-router-dom";

function Cart({cart, updateCart}) {

    function handleClick(){
        updateCart({
            items: [],
            totalQuant: 0
        })
    }

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                <i className="fas fa-bicycle"></i>
                {cart.totalQuant}
            </div>
            <button onClick={ () => handleClick() } >Vider le Panier</button>
            <Link to="/shop/mycart">Mon pannier</Link>
        </div>
    )
}

export default Cart;