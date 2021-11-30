import {useEffect, useState} from 'react'
import Article from '../components/Article.jsx';

function ShoppingList({cart, updateCart}) {

    const [articleList, updateArticleList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/articles`)
             .then((response) => response.json())
             .then((articles) => updateArticleList(articles))
             .catch((error) => console.log(error))         
     }, [])

    return (
        <div className='Shopping-list'>
            <h2>Boutique</h2>
            <div>
                <ul className='article-list'>
                {articleList.map(article => (
                    <Article article={article} cart={cart} updateCart={updateCart} ></Article>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingList;