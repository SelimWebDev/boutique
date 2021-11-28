import { useState } from 'react';
import ShoppingList from '../components/ShoppingList.jsx'
import Cart from '../components/Cart'
import Article from '../components/Article.jsx';

function Shop(){
    const [cart, updateCart] = useState(0);
    const [articleList, updateList] = useState([
        {
            id : 0,
            name : "vélo 500W",
            price : "250"
        },
        {
            id : 1,
            name : "vélo 1000W",
            price : 500
        }
    ]);


    return (
        <div className="Shop-page">
            <Cart cart={cart} updateCart={updateCart}></Cart>
            <ShoppingList>
                {articleList.map(article => (
                    <Article id={article.id} name={article.name} price={article.price} cart={cart} updateCart={updateCart}></Article>
                ))}
            </ShoppingList>
        </div>
    )
}

export default Shop;