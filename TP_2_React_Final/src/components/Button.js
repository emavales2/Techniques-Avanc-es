import PropTypes from 'prop-types'


const Button = ({ text, onClick, className }) => {
    
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    
    // Me permet assigner une className au moment de placer l'élément
    className: PropTypes.string.isRequired
}

export default Button