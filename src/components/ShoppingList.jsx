import Article from '../components/Article.jsx';
import useGetReq from '../utils/hooks/index.jsx';
import Loader from './Loader.jsx';

function ShoppingList({cart, updateCart}) {
    
    const { isLoading, data } = useGetReq(`http://localhost:3001/api/articles`)
    const articleList = Object.values(data)
    const listLoading = isLoading

    if(listLoading){
        return (
            <Loader />
        )
    } else {
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
    
}

export default ShoppingList;