import { Link } from "react-router-dom";

function MyCart({cart}){
    return (
        <div>
            {cart.items.map(article => 
                    <div>
                        nom : {article.item.name}
                        prix: {article.item.price}
                        quantité : {article.quantity}
                    </div>
            )}
            <Link to="../shopping">Retour à la boutique</Link>
        </div>
    )
}

export default MyCart;