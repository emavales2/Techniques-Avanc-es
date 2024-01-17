import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav>
            <h3><Link to="/" data-link>{props.link1}</Link></h3>
            <h3><Link to="/products" data-link>{props.link2}</Link></h3>
        </nav>
    );
};

Nav.defaultProps = {
    link1: 'home',
    link2: 'produits'
};

Nav.propTypes = {
    link1: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired
};

export default Nav;