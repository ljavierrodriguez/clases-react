import React from 'react'

const ProductCardHeader = (props) => {
  return (
    <div className="card-header">
        {props.children}
    </div>
  )
}

export default ProductCardHeader