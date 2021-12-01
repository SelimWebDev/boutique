import logo from '../logo.svg';
import '../App.css';
import PropTypes from 'prop-types';

function Loader(props) {
    const title = props.title
    return (
      <div className="loader">
          <h1>{title}</h1>
          <img src={logo} className="Banner-logo" alt="logo" />
      </div>
    );
  }
  
  Loader.propTypes = {
    title: PropTypes.string
  };

  export default Loader;