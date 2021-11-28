import logo from '../logo.svg';
import '../App.css';
import PropTypes from 'prop-types';

function Banner(props) {
    const title = props.title
    return (
      <div className="Banner">
          <h1>{title}</h1>
          <img src={logo} className="Banner-logo" alt="logo" />
      </div>
    );
  }
  
  Banner.propTypes = {
    title: PropTypes.string
  };

  export default Banner;