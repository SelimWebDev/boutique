import { useState } from "react"
import PropTypes from "prop-types"

function Article({article, cart, updateCart}){
    const [quantity, updateQuandity] = useState(0);

    function handleChange(e) {
      e = parseInt(e.target.value)
      updateQuandity(e);
    }

    function  handleSubmit() {

      if (cart.totalQuant === 0){
        updateCart({
          items: [{
            id: article.id,
            quantity: quantity
          }],
          totalQuant: quantity
        })
      } else {
        updateCart({
          items: [...cart.items,{
            id: article.id,
            quantity: quantity
          }],
          totalQuant: cart.totalQuant+quantity
        })
      }
    }

    return (
      <li key={article.id}>
          <span>Moteur : {article.name}</span>
          <span>Prix {article.price}</span>
          <label htmlFor="quantity">Quantité</label>
          <input id ="quantity" type="number" onChange={(e) => handleChange(e)}></input>
          <button onClick={() => handleSubmit()} >Ajouter</button>
      </li>
    )   
}

Article.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired
}

export default Article




    