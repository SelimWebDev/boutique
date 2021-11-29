function Cart({cart, updateCart}) {
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                <i className="fas fa-bicycle"></i>
                {cart}
            </div>
            <button onClick={() => updateCart(0)}>Vider le Panier</button>
        </div>
    )
}

export default Cart;