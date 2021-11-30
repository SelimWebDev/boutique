import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Article({article}){
    return (
      <li className="article" key={article.id}>
        <Link to={"./" + article.id}>
          <div className="img-wrapper">
              <img alt={article.name} src={"http://localhost:3001/images/" + article.imgUrl}/>
          </div>
            <div className="article-desc">
              <span>Moteur : {article.name}</span>
              <span>Prix {article.price}</span>
              <label htmlFor="quantity">Quantité</label>
            </div>
          </Link>
      </li>
    )   
}

Article.prototype = {
  
}

export default Article




    