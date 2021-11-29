import { Link } from "react-router-dom";
import Article from "./Article";

function MyCart(cart){
    return (
        <div>
            
            <Link to="../shopping">Retour à la boutique</Link>
        </div>
    )
}

export default MyCart;