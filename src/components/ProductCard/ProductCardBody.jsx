import React from 'react'

const ProductCardBody = (props) => {
    return (
        <div className="card-body p-4">
            {props.children}
        </div>
    )
}

export default ProductCardBody