function ShoppingList(props) {
    return (
        <div className='Shopping-list'>
            <h2>Article</h2>
            <div>
                <ul className='lmj-article-list'>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingList;