import React from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <header className="welcome">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </header>
  )
};

Home.defaultProps = {
  title: 'Welcome',
  subtitle: 'Please access our list of products through the menu above'
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Home;