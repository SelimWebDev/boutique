import { Link } from "react-router-dom";

function Cart({cart, updateCart}) {

    return (
        <div className='cart'>
            <Link to="/shop/mycart">
                <div>
                    <i className="fas fa-shopping-cart fa-2x">                                          </i>
                    <span className="totalQuant">{cart.totalQuant}</span>
                </div>
            </Link>
        </div>
    )
}

export default Cart;