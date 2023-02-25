import React from 'react'

const ProductCardTitle = (props) => {
    return (
        <>
            {/* Product name*/}
            <h5 className="fw-bolder text-center">{props.title}</h5>
            {/* Product price*/}
            <p className="text-center">{props.price}</p>
        </>
    )
}

export default ProductCardTitle