import { useState } from "react"
import PropTypes from "prop-types"

function Article({id, name, price, cart, updateCart}){
    const [quantity, updateQuandity] = useState(0);

    function handleChange(e) {
      
      updateQuandity(parseInt(e.target.value));
    }

    function  handleSubmit() {
      updateCart(cart + quantity)
    }

    return (
      <li key={id}>
          <span>Moteur : {name}</span>
          <span>Prix {price}</span>
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
  cart: PropTypes.number.isRequired,
  updateCart: PropTypes.func.isRequired
}

export default Article




    