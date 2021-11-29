import { useState, useEffect } from 'react';
import ShoppingList from '../components/ShoppingList.jsx'
import Cart from '../components/Cart'
import Article from '../components/Article.jsx';

function Shop(){
    const [cart, updateCart] = useState(0);
    const [articleList, updateArticleList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/articles`)
             .then((response) => response.json())
             .then((articles) => updateArticleList(articles))
             .catch((error) => console.log(error))         
     }, [])

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