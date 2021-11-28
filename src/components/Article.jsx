import { useState } from "react"

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

export default Article




    