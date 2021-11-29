import {useEffect, useState} from 'react'
import Article from '../components/Article.jsx';

function ShoppingList({totalQuant, updateTotalQuant, updateSelectedArticles, selectedArticles}) {

    const [articleList, updateArticleList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/articles`)
             .then((response) => response.json())
             .then((articles) => updateArticleList(articles))
             .catch((error) => console.log(error))         
     }, [])

    return (
        <div className='Shopping-list'>
            <h2>Article</h2>
            <div>
                <ul className='lmj-article-list'>
                {articleList.map(article => (
                    <Article article={article} totalQuant={totalQuant} updateTotalQuant={updateTotalQuant} updateSelectedArticles={updateSelectedArticles} selectedArticles={selectedArticles} ></Article>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingList;