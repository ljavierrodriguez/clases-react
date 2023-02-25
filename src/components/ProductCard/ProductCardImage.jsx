import React from 'react'

const ProductCardImage = (props) => {
    return (
        <img
            className="card-img-top"
            src={props.url}
            alt="..."
        />
    )
}

export default ProductCardImage