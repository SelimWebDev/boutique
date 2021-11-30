import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function DetailledArticle({cart, updateCart}){
    const [article, updateArticle] = useState({})
    const [id, updateId] = useState(useParams().id)
    const [quantity, updateQuandity] = useState(0);

    function handleChange(e) {
      e = parseInt(e.target.value)
      updateQuandity(e);
    }

    function  handleSubmit() {

      if (cart.totalQuant === 0){
        updateCart({
          items: [{
            item: article,
            quantity: quantity
          }],
          totalQuant: quantity
        })
      } else {
        updateCart({
          items: [...cart.items,{
            item: article,
            quantity: quantity
          }],
          totalQuant: cart.totalQuant+quantity
        })
      }
    }

    useEffect(() => {
        fetch('http://localhost:3001/api/articles/' + id)
            .then((response) => response.json())
            .then((article) => updateArticle(article))
            .catch((error) => console.log(error))
    },[])

    return (
        <div className="article" >
            <div className="img-wrapper">
              <img alt={article.name} src={"http://localhost:3001/images/" + article.imgUrl}/>
            </div>
            <div className="article-desc">
              <span>Moteur : {article.name}</span>
              <span>Prix {article.price}</span>
              <label htmlFor="quantity">Quantité</label>
              <input defaultValue="1" id ="quantity" type="number" onChange={(e) => handleChange(e)}></input>
              <button onClick={() => handleSubmit()} >Ajouter</button>
            
            </div> 
        </div>
    )
}

export default DetailledArticle;