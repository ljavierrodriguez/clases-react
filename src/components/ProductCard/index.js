import React from 'react'
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

ProductCard.defaultProps = {
    title: "Lorem Ipsum",
    price: "$0 - $10",
    url: "https://picsum.photos/450/300",
    className: "card h-100 shadow"
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url: PropTypes.string,
    className: PropTypes.string.isRequired
}

export default ProductCard